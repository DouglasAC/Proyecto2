/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%options flex case-insensitive
%%

\s+                     /* skip whitespace */
"//"([^\n])*            /* Comentario de Linea */
"/*"([^\*])*"*/"        /* Comentario Multi Linea */
[0-9]+("."[0-9]+)\b     return 'DECIMAL'
[0-9]+\b                return 'ENTERO'
\"([^\"]+|[\r\n])*\"    return 'CADENA'
\'([^\'']+|[\r\n])*\'                 return 'CARACTER'
"*"                     return '*'
"/"                     return '/'
"-"                     return '-'
"+"                     return '+'
'^^'                    return '^^'
'^'                     return '^'
"==="                   return '==='
"=="                    return '=='
"!="                    return '!='
"<="                    return '<='
">="                    return '>='
"<"                     return '<'
">"                     return '>'
"("                     return '('
")"                     return ')'
"[]"                    return '[]'
"["                     return '['
"]"                     return ']'
"{"                     return '{'
"}"                     return '}'
"="                     return '='
":="                    return ':='
":"                     return ':'

";"                     return 'PTCOMA'
"!"                     return '!'
"%"                     return '%'
"'"                     return 'COMILLA'
","                     return ','
"."                     return '.'
"||"                    return '||'
"&&"                    return '&&'
"true"                  return 'VERDADERO'
"false"                 return 'FALSO'
"null"                  return 'NULO'
"if"                    return 'SI'
"else"                  return 'SINO'
"while"                 return 'WHILE'
"do"                    return 'DO'
"break"                 return 'BREAK'
"continue"              return 'CONTINUE'
"print"                 return 'PRINT'

"int"                   return 'INT'
"double"                return 'DOUBLE'
"boolean"               return 'BOOLEAN'
"char"                  return 'CHAR'
"var"                   return 'VAR'
"const"                 return 'CONST'
"global"                return 'GLOBAL'
"return"                return 'RETORNO'
"void"                  return 'VOID'
"strc"                  return 'STRC'
"define"                return 'DEFINE'
"as"                    return 'AS'
[a-zA-Z_][_a-zA-Z0-9ñÑ]*  return 'ID'

<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '^'
%left '||'
%left '&&'
%left '==' '!=' '==='
%left '<' '>' '<=' '>='
%left '+' '-'
%left '*' '/' '%'
%right '^^'

%right UMINUS '!'

%start INICIO

%% /* language grammar */

INICIO:
    CUERPOS EOF         { return new AstAlto($1); }
;

CUERPOS:
    CUERPOS CUERPO      { $$ = $1; $$.push($2); }
    | CUERPO                { $$ = [$1]; }
;

CUERPO:
    SENTECIA                { $$ = $1; }
    | DECLARAR_FUNCION      { $$ = $1; }
;

DECLARAR_FUNCION:
    TIPO ID '(' ')' '{' SENTENCIAS '}'                  { $$ = new FuncionAlto([$1], $2, [], $6, @1.first_line, @1.first_column); }
    | TIPO ID '(' PARAMETROS ')' '{' SENTENCIAS '}'     { $$ = new FuncionAlto([$1], $2, $4, $7, @1.first_line, @1.first_column); }
    | VOID ID '(' ')' '{' SENTENCIAS '}'                { $$ = new FuncionAlto(["void"], $2, [], $6, @1.first_line, @1.first_column); }
    | VOID ID '(' PARAMETROS ')' '{' SENTENCIAS '}'     { $$ = new FuncionAlto(["void"], $2, $4, $7, @1.first_line, @1.first_column); }
;

PARAMETROS:
    PARAMETROS ',' PARAMETRO        { $$ = $1; $$.push($3); }
    | PARAMETRO                     { $$ = [$1]; }
;

PARAMETRO:
    TIPO ID         { $$ = [[$1], $2] }
;


SENTENCIAS:
    SENTENCIAS SENTECIA         { $$ = $1; $$.push($2); }
    | SENTECIA                  { $$ = [$1]; }
;

SENTECIA:
    SENTECIA_DECLARACION PTCOMA     { $$ = $1; }
    | SENTECIA_ASIGNACION  PTCOMA   { $$ = $1; }
    | SENTECIA_IMPRIMIR   PTCOMA    { $$ = $1; }
    | SENTENCIA_SI                  { $$ = $1; }
    | SENTECIA_WHILE                { $$ = $1; }
    | SENTECIA_DO_WHILE PTCOMA      { $$ = $1; }
    | SENTECIA_BREAK    PTCOMA      { $$ = $1; }
    | SENTECIA_CONTINUE PTCOMA      { $$ = $1; }
    | SENTECIA_RETURN   PTCOMA      { $$ = $1; }
    | SENTECIA_LLAMADA  PTCOMA      { $$ = $1; }
    | ASIGNAR_ARREGLO   PTCOMA      { $$ = $1; }
    | DECLARAR_ARREGLO  PTCOMA      { $$ = $1; }
    | DEFINIR_ESTRUCTURA  PTCOMA    { $$ = $1; }
    | ASIGNAR_ESTRUCURA PTCOMA      { $$ = $1; }
;

SENTECIA_IMPRIMIR:
    PRINT '(' EXPRESION ')'     { $$ = new ImprimirAlto($3, @1.first_line, @1.first_column); }
;

SENTENCIA_SI:
    SI '(' EXPRESION ')' '{' SENTENCIAS '}'                         { $$ = new SiAlto($3, $6, null, @1.first_line, @1.first_column); }
    | SI '(' EXPRESION ')' '{' SENTENCIAS '}' SENTENCIA_SINO        { $$ = new SiAlto($3, $6, $8, @1.first_line, @1.first_column); }
;

SENTENCIA_SINO:
    SINO '{' SENTENCIAS '}'         { $$ = $3; }
    | SINO SENTENCIA_SI             { $$ = [$2]; }
;

SENTECIA_WHILE:
    WHILE '(' EXPRESION ')' '{' SENTENCIAS '}'         { $$ = new WhileAlto($3, $6, @1.first_line, @1.first_column); }
;

SENTECIA_DO_WHILE:
    DO '{' SENTENCIAS '}' WHILE '(' EXPRESION ')'      { $$ = new DoWhileAlto($7, $3, @1.first_line, @1.first_column); } 
;

SENTECIA_BREAK:
    BREAK           { $$ = new BreakAlto(@1.first_line, @1.first_column); }
;

SENTECIA_CONTINUE:
    CONTINUE        { $$ = new ContinueAlto(@1.first_line, @1.first_column); }
;

SENTECIA_RETURN:
    RETORNO                     { $$ = new ReturnAlto(null, @1.first_line, @1.first_column); }
    | RETORNO EXPRESION         { $$ = new ReturnAlto($2, @1.first_line, @1.first_column); }
;

SENTECIA_DECLARACION:
    TIPO LISTA_ID                       { $$ = new DeclaracionAlto([$1], $2, null, @1.first_line, @1.first_column); }
    | TIPO LISTA_ID '=' EXPRESION       { $$ = new DeclaracionAlto([$1], $2, $4, @1.first_line, @1.first_column); }
    | TIPO_DEC ID ':=' EXPRESION        { $$ = new DeclaracionSinTipoAlto([$1], $2, $4, @1.first_line, @1.first_column); }
;

LISTA_ID:
    LISTA_ID ',' ID             { $$ = $1, $$.push($3); }
    | ID                        { $$ = [$1]; }
;

TIPO_DEC:
    VAR         { $$ = "var"; }
    | CONST     { $$ = "const"; }
    | GLOBAL    { $$ = "global"; }
;

SENTECIA_ASIGNACION:
    ID '=' EXPRESION            { $$ = new AsignacionAlto($1, $3, @1.first_line, @1.first_column); }
;

SENTECIA_LLAMADA:
    ID '(' LISTA_EXPRESION ')'      { $$ = new LLamadaAlto($1, $3, @1.first_line, @1.first_column); }
    |  ID '(' ')'                   { $$ = new LLamadaAlto($1, [], @1.first_line, @1.first_column); }
;

LISTA_EXPRESION:
    LISTA_EXPRESION ',' EXPRESION       { $$ = $1, $$.push($3); }
    | EXPRESION                         { $$ = [$1]; }
;

TIPO:
    INT             { $$ = 'int'; }
    | DOUBLE        { $$ = 'double'; }
    | BOOLEAN       { $$ = 'boolean'; }
    | CHAR          { $$ = 'char'; }
    | ID            { $$ = $1.toLocaleLowerCase(); }
;

DECLARAR_ARREGLO:
    TIPO '[]' ID '=' EXPRESION       { $$ = new DeclararArregloAlto([$1], $3, $5, @1.first_line, @1.first_column); }
;

ASIGNAR_ARREGLO:
    ID '[' EXPRESION ']' '=' EXPRESION      { $$ = new AsignacionArregloAlto($1, $3, $6, @1.first_line, @1.first_column); }
;

DEFINIR_ESTRUCTURA:
    DEFINE ID AS '[' LISTA_ATRIBUTOS ']'    { $$ = new DefinirEstructura($2, $5, @1.first_line, @1.first_column); }
;

LISTA_ATRIBUTOS:
    LISTA_ATRIBUTOS ',' ATRIBUTO    { $$ = $1; $$.push($3); }
    | ATRIBUTO                      { $$ = [$1]; }
;

ATRIBUTO:
    TIPO ID                         { $$ = new Atributo([$1], $2, null); }
    | TIPO ID '=' EXPRESION         { $$ = new Atributo([$1], $2, $4); }
    | TIPO '[]' ID                  { $$ = new Atributo(["Tarry", $1], $3, null); }
    | TIPO '[]' ID '=' EXPRESION    { $$ = new Atributo(["Tarry", $1], $3, $5); }
;

ASIGNAR_ESTRUCURA:
    ID '.' ID '=' EXPRESION         { $$ = new AsignacionEstructuraAlto($1, $3, $5, @1.first_line, @1.first_column); }
;

EXPRESION:
    EXPRESION_ARITMETICA            { $$ = $1; }
    | EXPRESION_LOGICA              { $$ = $1; }
    | EXPRESION_RELACIONAL          { $$ = $1; }
    | PRIMITIVO                     { $$ = $1; }
    | '(' EXPRESION ')'             { $$ = $2; }
    | SENTECIA_LLAMADA              { $$ = $1; }
    | EXPRESION_ARREGLO             { $$ = $1; }
    | ACCESO_ARREGLO                { $$ = $1; }
    | EXPRESION_ESTRUCTURA          { $$ = $1; }
    | EXPRESION_ACCESO_ESTRUCTURA   { $$ = $1; }
;

EXPRESION_ARREGLO:
    STRC TIPO '[' EXPRESION ']'     { $$ = new ArregloConTipoAlto([$2], $4, @1.first_line, @1.first_column); }
    | '{' LISTA_EXPRESION '}'       { $$ = new ArregloSinTipoAlto($2, @1.first_line, @1.first_column); }
;

EXPRESION_ESTRUCTURA:
    STRC TIPO '('')'                { $$ = new CrearEstructuraAlto($2, @1.first_line, @1.first_column); }
;

ACCESO_ARREGLO:
    ID '[' EXPRESION ']'            { $$ = new AccesoArregloAlto($1, $3, @1.first_line, @1.first_column); }
;

EXPRESION_ACCESO_ESTRUCTURA:
    ID '.' ID                       { $$ = new AccesoEstructuraAlto($1, $3, @1.first_line, @1.first_column); }
;

EXPRESION_ARITMETICA:
    '-' EXPRESION %prec UMINUS      { $$ = new OperacionAlto(null, null, $2, 'U', @1.first_line, @1.first_column); }
    | EXPRESION '+' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '+', @2.first_line, @2.first_column); }
    | EXPRESION '-' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '-', @2.first_line, @2.first_column); }
    | EXPRESION '*' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '*', @2.first_line, @2.first_column); }
    | EXPRESION '/' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '/', @2.first_line, @2.first_column); }
    | EXPRESION '^^' EXPRESION      { $$ = new OperacionAlto($1, $3, null, '^^', @2.first_line, @2.first_column); }
    | EXPRESION '%' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '%', @2.first_line, @2.first_column); }
;

EXPRESION_LOGICA:
    EXPRESION '||' EXPRESION        { $$ = new OperacionAlto($1, $3, null, '||', @2.first_line, @2.first_column); }
    | EXPRESION '&&' EXPRESION      { $$ = new OperacionAlto($1, $3, null, '&&', @2.first_line, @2.first_column); }
    | EXPRESION '^' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '^', @2.first_line, @2.first_column); }
    | '!' EXPRESION                 { $$ = new OperacionAlto(null, null, $2, '!', @2.first_line, @2.first_column); }
;

EXPRESION_RELACIONAL:
    EXPRESION '>' EXPRESION         { $$ = new OperacionAlto($1, $3, null, '>', @2.first_line, @2.first_column); }
    | EXPRESION '<' EXPRESION       { $$ = new OperacionAlto($1, $3, null, '<', @2.first_line, @2.first_column); }
    | EXPRESION '==' EXPRESION      { $$ = new OperacionAlto($1, $3, null, '==', @2.first_line, @2.first_column); }
    | EXPRESION '===' EXPRESION     { $$ = new OperacionAlto($1, $3, null, '===', @2.first_line, @2.first_column); }
    | EXPRESION '!=' EXPRESION      { $$ = new OperacionAlto($1, $3, null, '!=', @2.first_line, @2.first_column); }
    | EXPRESION '>=' EXPRESION      { $$ = new OperacionAlto($1, $3, null, '>=', @2.first_line, @2.first_column); }
    | EXPRESION '<=' EXPRESION      { $$ = new OperacionAlto($1, $3, null, '<=', @2.first_line, @2.first_column); }
;

PRIMITIVO:
    ENTERO              { $$ = new PrimitivoAlto('int', Number(yytext), @1.first_line, @1.first_column); }
    | DECIMAL           { $$ = new PrimitivoAlto('double', Number(yytext), @1.first_line, @1.first_column); }
    | VERDADERO         { $$ = new PrimitivoAlto('boolean', true, @1.first_line, @1.first_column); }
    | FALSO             { $$ = new PrimitivoAlto('boolean', false, @1.first_line, @1.first_column); }
    | NULO              { $$ = new PrimitivoAlto('null', 'null', @1.first_line, @1.first_column); }
    | CARACTER          {   let a = yytext;
                            if(a.length>2){
                                a = a.substr(1);
                                a = a.substr(-a.length, a.length-1);
                                a = a.replace("\\'", "\'");
                                a = a.replace("\\\"", "\"");
                                a = a.replace("\\\\", "\\");
                                a = a.replace("\\n", "\n");
                                a = a.replace("\\t", "\t");
                                a = a.replace("\\r", "\r");
                            }else
                            {
                                a = '\0';
                            }
                            
                            
                            $$ = new PrimitivoAlto('char', a, @1.first_line, @1.first_column); }
    | CADENA            {   let a2 = yytext;
                            a2 = a2.substr(1);
                            a2 = a2.substr(-a2.length, a2.length-1);
                            a2 = a2.replace("\\'", "\'");
                            a2 = a2.replace("\\\"", "\"");
                            a2 = a2.replace("\\\\", "\\");
                            a2 = a2.replace("\\n", "\n");
                            a2 = a2.replace("\\t", "\t");
                            a2 = a2.replace("\\r", "\r");
                            $$ = new PrimitivoAlto('string', a2, @1.first_line, @1.first_column); }
    | ID                { $$ = new IdentificadorAlto($1, @1.first_line, @1.first_column); }
;

