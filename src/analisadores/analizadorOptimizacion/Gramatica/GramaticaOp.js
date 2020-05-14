/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var GramaticaOp = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,17],$V1=[1,28],$V2=[1,29],$V3=[1,19],$V4=[1,20],$V5=[1,21],$V6=[1,22],$V7=[1,23],$V8=[1,24],$V9=[1,25],$Va=[1,26],$Vb=[1,27],$Vc=[5,21,25,26,27,30,40,42,43,53,55,56,57],$Vd=[8,23,29,31,34,35,36,37,38,46,47,48,49,50,51,52],$Ve=[8,23],$Vf=[1,63],$Vg=[1,61],$Vh=[8,29,34,35,36,37,38,46,47,48,49,50,51,52],$Vi=[25,26,35,39];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"CUERPOS":4,"EOF":5,"CUERPO":6,"DECLARAR_TEMPORALES":7,";":8,"DECLARAR_ESTRUCTURA":9,"ASIGNAR_OPERACION":10,"ASIGNAR_SIMPLE":11,"ASIGNAR_ESTRUCTURA":12,"ASIGNAR_EN_ESTRUCTURA":13,"DESTINO":14,"SALTO_INCONDICIONAL":15,"SALTO_CONDICIONAL":16,"INICIO_PROCEDIMIENTO":17,"FIN_PROCEDIMIENTO":18,"LLAMADA":19,"IMPRIMIR":20,"var":21,"LISTA_TEMPORALES":22,",":23,"TEMPORAL":24,"tmp":25,"ID":26,"heap":27,"[":28,"]":29,"stack":30,"=":31,"VALOR":32,"TIPO_OPERACION":33,"+":34,"-":35,"*":36,"/":37,"%":38,"NUMBER":39,"etiqueta":40,":":41,"goto":42,"if":43,"(":44,"TIPO_SALTO":45,")":46,"==":47,"<>":48,"<":49,">":50,"<=":51,">=":52,"proc":53,"begin":54,"end":55,"call":56,"print":57,"COMILLA":58,"TIPO_PRINT":59,"printchar":60,"printdeci":61,"printent":62,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:";",21:"var",23:",",25:"tmp",26:"ID",27:"heap",28:"[",29:"]",30:"stack",31:"=",34:"+",35:"-",36:"*",37:"/",38:"%",39:"NUMBER",40:"etiqueta",41:":",42:"goto",43:"if",44:"(",46:")",47:"==",48:"<>",49:"<",50:">",51:"<=",52:">=",53:"proc",54:"begin",55:"end",56:"call",57:"print",58:"COMILLA",60:"printchar",61:"printdeci",62:"printent"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,1],[6,2],[6,2],[6,1],[6,1],[6,2],[6,2],[7,2],[22,3],[22,1],[24,1],[24,1],[9,4],[9,4],[10,5],[33,1],[33,1],[33,1],[33,1],[33,1],[32,1],[32,1],[32,2],[32,2],[11,3],[12,6],[12,6],[13,6],[13,6],[14,2],[15,2],[16,8],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[17,3],[18,1],[19,2],[20,8],[59,1],[59,1],[59,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return new ArbolOp($$[$0-1]); 
break;
case 2:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3: case 19:
 this.$ = [$$[$0]]; 
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 11: case 12: case 15: case 16:
 this.$ = $$[$0-1]; 
break;
case 10: case 13: case 14: case 20: case 21: case 30: case 31: case 42: case 43: case 44: case 45: case 46: case 47: case 52: case 53: case 54:
 this.$ = $$[$0]; 
break;
case 17:
 this.$ = new DeclararTempOp($$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 18:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 22:
 this.$ = new DeclararEstruOp("Heap", _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 23:
 this.$ = new DeclararEstruOp("Stack", _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 24:
 this.$ = new AsignarOperacionOp($$[$0-4], $$[$0-2], $$[$0-1], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 25:
 this.$ = '+'; 
break;
case 26:
 this.$ = '-'; 
break;
case 27:
 this.$ = '*'; 
break;
case 28:
 this.$ = '/'; 
break;
case 29:
 this.$ = '%'; 
break;
case 32:
 this.$ = "-" + $$[$0]; 
break;
case 33:
 this.$ = '-' + $$[$0]; 
break;
case 34:
 this.$ = new AsignarSimpleOp($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 35:
 this.$ = new AsignarEstruOp($$[$0-5], "Heap", $$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 36:
 this.$ = new AsignarEstruOp($$[$0-5], "Stack", $$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 37:
 this.$ = new AsignarEnEstruOp("Heap", $$[$0-3], $$[$0], _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 38:
 this.$ = new AsignarEnEstruOp("Stack", $$[$0-3], $$[$0], _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 39:
 this.$ = new EtiquetaOp($$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 40:
 this.$ = new SaltoIncondicionalOp($$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 41:
 this.$ = new SaltoCondicionalOp($$[$0-5], $$[$0-4], $$[$0-3], $$[$0], _$[$0-7].first_line, _$[$0-7].first_column); 
break;
case 48:
 this.$ = new InicioProcOp($$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 49:
 this.$ = new FinProcOp(_$[$0].first_line, _$[$0].first_column); 
break;
case 50:
 this.$ = new LlamadaOp($$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 51:
 this.$ = new PrintOp($$[$0-4], $$[$0-1], _$[$0-7].first_line, _$[$0-7].first_column); 
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:13,18:14,19:15,20:16,21:$V0,24:18,25:$V1,26:$V2,27:$V3,30:$V4,40:$V5,42:$V6,43:$V7,53:$V8,55:$V9,56:$Va,57:$Vb},{1:[3]},{5:[1,30],6:31,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:12,17:13,18:14,19:15,20:16,21:$V0,24:18,25:$V1,26:$V2,27:$V3,30:$V4,40:$V5,42:$V6,43:$V7,53:$V8,55:$V9,56:$Va,57:$Vb},o($Vc,[2,3]),{8:[1,32]},{8:[1,33]},{8:[1,34]},{8:[1,35]},{8:[1,36]},{8:[1,37]},o($Vc,[2,10]),{8:[1,38]},{8:[1,39]},o($Vc,[2,13]),o($Vc,[2,14]),{8:[1,40]},{8:[1,41]},{22:42,24:45,25:$V1,26:$V2,27:[1,43],30:[1,44]},{31:[1,46]},{28:[1,47]},{28:[1,48]},{41:[1,49]},{40:[1,50]},{44:[1,51]},{26:[1,52]},o($Vc,[2,49]),{26:[1,53]},{44:[1,54]},o($Vd,[2,20]),o($Vd,[2,21]),{1:[2,1]},o($Vc,[2,2]),o($Vc,[2,4]),o($Vc,[2,5]),o($Vc,[2,6]),o($Vc,[2,7]),o($Vc,[2,8]),o($Vc,[2,9]),o($Vc,[2,11]),o($Vc,[2,12]),o($Vc,[2,15]),o($Vc,[2,16]),{8:[2,17],23:[1,55]},{28:[1,56]},{28:[1,57]},o($Ve,[2,19]),{24:62,25:$V1,26:$V2,27:[1,59],30:[1,60],32:58,35:$Vf,39:$Vg},{24:62,25:$V1,26:$V2,32:64,35:$Vf,39:$Vg},{24:62,25:$V1,26:$V2,32:65,35:$Vf,39:$Vg},o($Vc,[2,39]),{8:[2,40]},{24:62,25:$V1,26:$V2,32:66,35:$Vf,39:$Vg},{54:[1,67]},{8:[2,50]},{58:[1,68]},{24:69,25:$V1,26:$V2},{29:[1,70]},{29:[1,71]},{8:[2,34],33:72,34:[1,73],35:[1,74],36:[1,75],37:[1,76],38:[1,77]},{28:[1,78]},{28:[1,79]},o($Vh,[2,30]),o($Vh,[2,31]),{24:81,25:$V1,26:$V2,39:[1,80]},{29:[1,82]},{29:[1,83]},{45:84,47:[1,85],48:[1,86],49:[1,87],50:[1,88],51:[1,89],52:[1,90]},o($Vc,[2,48]),{59:91,60:[1,92],61:[1,93],62:[1,94]},o($Ve,[2,18]),{8:[2,22]},{8:[2,23]},{24:62,25:$V1,26:$V2,32:95,35:$Vf,39:$Vg},o($Vi,[2,25]),o($Vi,[2,26]),o($Vi,[2,27]),o($Vi,[2,28]),o($Vi,[2,29]),{24:62,25:$V1,26:$V2,32:96,35:$Vf,39:$Vg},{24:62,25:$V1,26:$V2,32:97,35:$Vf,39:$Vg},o($Vh,[2,32]),o($Vh,[2,33]),{31:[1,98]},{31:[1,99]},{24:62,25:$V1,26:$V2,32:100,35:$Vf,39:$Vg},o($Vi,[2,42]),o($Vi,[2,43]),o($Vi,[2,44]),o($Vi,[2,45]),o($Vi,[2,46]),o($Vi,[2,47]),{58:[1,101]},{58:[2,52]},{58:[2,53]},{58:[2,54]},{8:[2,24]},{29:[1,102]},{29:[1,103]},{24:62,25:$V1,26:$V2,32:104,35:$Vf,39:$Vg},{24:62,25:$V1,26:$V2,32:105,35:$Vf,39:$Vg},{46:[1,106]},{23:[1,107]},{8:[2,35]},{8:[2,36]},{8:[2,37]},{8:[2,38]},{42:[1,108]},{24:62,25:$V1,26:$V2,32:109,35:$Vf,39:$Vg},{40:[1,110]},{46:[1,111]},{8:[2,41]},{8:[2,51]}],
defaultActions: {30:[2,1],50:[2,40],53:[2,50],70:[2,22],71:[2,23],92:[2,52],93:[2,53],94:[2,54],95:[2,24],102:[2,35],103:[2,36],104:[2,37],105:[2,38],110:[2,41],111:[2,51]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true,"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* Comentario de Linea */
break;
case 2:/* Comentario Multi Linea */
break;
case 3:return 39
break;
case 4:return 60
break;
case 5:return 61
break;
case 6:return 62
break;
case 7:return 36
break;
case 8:return 37
break;
case 9:return 35
break;
case 10:return 34
break;
case 11:return 47
break;
case 12:return 48
break;
case 13:return 51
break;
case 14:return 52
break;
case 15:return 49
break;
case 16:return 50
break;
case 17:return 44
break;
case 18:return 46
break;
case 19:return 28
break;
case 20:return 29
break;
case 21:return '{'
break;
case 22:return '}'
break;
case 23:return 31
break;
case 24:return 41
break;
case 25:return 8
break;
case 26:return 38
break;
case 27:return 58
break;
case 28:return 23
break;
case 29:return 25
break;
case 30:return 40
break;
case 31:return 43
break;
case 32:return 42
break;
case 33:return 30
break;
case 34:return 27
break;
case 35:return 56
break;
case 36:return 57
break;
case 37:return 53
break;
case 38:return 54
break;
case 39:return 55
break;
case 40:return 21
break;
case 41:return 26
break;
case 42:return 5
break;
case 43:return 'INVALID'
break;
case 44:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/i,/^(?:#([^\n])*)/i,/^(?:#\*([^\*])*\*#)/i,/^(?:(-)?[0-9]+(\.[0-9]+)?\b)/i,/^(?:%c)/i,/^(?:%d)/i,/^(?:%i)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:==)/i,/^(?:<>)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:=)/i,/^(?::)/i,/^(?:;)/i,/^(?:%)/i,/^(?:")/i,/^(?:,)/i,/^(?:["t"][0-9]+)/i,/^(?:["L"][0-9]+)/i,/^(?:if)/i,/^(?:goto)/i,/^(?:stack)/i,/^(?:heap)/i,/^(?:call)/i,/^(?:print)/i,/^(?:proc)/i,/^(?:begin)/i,/^(?:end)/i,/^(?:var)/i,/^(?:[a-zA-Z_][_a-zA-Z0-9ñÑ]*)/i,/^(?:$)/i,/^(?:.)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = GramaticaOp;
exports.Parser = GramaticaOp.Parser;
exports.parse = function () { return GramaticaOp.parse.apply(GramaticaOp, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}