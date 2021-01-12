const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

//Inspired by : https://stackoverflow.com/questions/17264639/replace-text-but-keep-case
//Keeps the capitalization of pattern words into the new replaced one.
//Also keeps track of the replaced word in case the new expression has capitalization the original doesn't aka Rune Goldberg Machine
    matchCase(text, pattern) {
        var result = '';
        for(var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);

            if((text.charCodeAt(i) >= 65 && (text.charCodeAt(i) < 65 + 26 )))
                result += c;
            else if(p >= 65 && p < 65 + 26 )
                result += c.toUpperCase();
            else
                result += c.toLowerCase();
        }
        return result;
    }

    //Main translator Function.
    translate(text, locale){

        var str = text
        var regex
        var translated = false

        if((text == undefined) || (locale == undefined))
          return { error: 'Required field(s) missing' }

        if(text == "")
            return { error: 'No text to translate' }

        if(locale === "american-to-british"){

            //Time management
            regex = new RegExp("\\d{1,2}\:\\d{1,2}","gi")
            if(str.match(regex)){
              translated = true
              str = str.replace(str.match(regex).toString(),'<span class=\"highlight\">' + str.match(regex).toString().replace(":",".") + '</span>')

            }

            Object.keys(americanOnly).forEach(word =>{
                regex = new RegExp("\\b" + word + "\\b","gi")
                
                if(regex.test(text)){
                    translated = true
                    str = str.replace(regex, '<span class=\"highlight\">' + this.matchCase(americanOnly[word],str.match(regex).toString()) + '</span>')
                    }
            })

            Object.keys(americanToBritishTitles).forEach(word =>{
                regex = new RegExp(word,"gi")

                if(regex.test(text)){
                    translated = true
                    str = str.replace(regex, '<span class=\"highlight\">' + this.matchCase(americanToBritishTitles[word],  str.match(regex).toString()) + '</span>')
                }
            })

            Object.keys(americanToBritishSpelling).forEach(word =>{
                regex = new RegExp("\\b" + word + "\\b","gi")

                if(regex.test(text)){
                    translated = true
                    str = str.replace(regex, '<span class=\"highlight\">' + this.matchCase(americanToBritishSpelling[word],  str.match(regex).toString()) + '</span>')
                }
            })
        }else if(locale === "british-to-american"){

            //Time Management
            regex = new RegExp("\\d{1,2}\.\\d{1,2}","gi")
            if(str.match(regex)){  
              translated = true            
              str = str.replace(str.match(regex).toString(),'<span class=\"highlight\">' + str.match(regex).toString().replace(".",":") + '</span>')
            }

            Object.keys(britishOnly).forEach(word =>{
                regex = new RegExp("\\b" + word + "\\b","gi")
                
                if(regex.test(text)){
                    translated = true
                    str = str.replace(regex, '<span class=\"highlight\">' + this.matchCase(britishOnly[word],str.match(regex).toString()) + '</span>')
                }
            })

            Object.keys(americanToBritishTitles).forEach(word =>{
                regex = new RegExp("\\b" + americanToBritishTitles[word] + "\\b","gi")

                if(regex.test(text)){
                    translated = true
                    str = str.replace(regex, '<span class=\"highlight\">' + this.matchCase(word,str.match(regex).toString()) + '</span> ')
                }
            })

            Object.keys(americanToBritishSpelling).forEach(word =>{
                regex = new RegExp("\\b" + americanToBritishSpelling[word] + "\\b","gi")
       
                if(regex.test(text)){
                    translated = true
                    str = str.replace(regex, '<span class=\"highlight\">' + this.matchCase(word,str.match(regex).toString()) + '</span>')
                }
            })
        } else return { error: 'Invalid value for locale field' }

        //In two cases (London and Kalyani, we replaced by shorter words leaving two spaces between words.  This filters and replaces all these with a single space)
        regex = new RegExp(/  +/g,"gi")
        str = str.replace(regex," ");

        if(!translated)
            str = "Everything looks good to me!"

        return {text: text, translation: str}   
    }

}

module.exports = Translator;