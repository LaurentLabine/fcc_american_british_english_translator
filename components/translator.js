const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

//https://stackoverflow.com/questions/17264639/replace-text-but-keep-case

    matchCase(text, pattern) {
        var result = '';
    
        for(var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);
    
            if(p >= 65 && p < 65 + 26)
                result += c.toUpperCase();
            else
                result += c.toLowerCase();
        }
        return result;
    }

    translate(text, locale){

        var str = text
        var regex

        if(text == "")
            return {error: "empty string"}

        if(locale === "american-to-british"){
            Object.keys(americanOnly).forEach(word =>{
                console.log(word)
                regex = new RegExp("\\b" + word + "\\b","gi")
                
                if(str.match(regex) != null)
                    console.log("Match : " + str.match(regex))
                
                    if(regex.test(text))
                    str = str.replace(regex, this.matchCase(americanOnly[word],str.match(regex).toString()))
            })

            Object.keys(americanToBritishTitles).forEach(word =>{
                regex = new RegExp("\\b" + word + "\\b","gi")

                if(str.match(regex) != null)
                console.log("Match : " + str.match(regex))

                if(regex.test(text))
                    str = str.replace(regex, this.matchCase(americanToBritishTitles[word],  str.match(regex).toString()))
            })

            Object.keys(americanToBritishSpelling).forEach(word =>{
                regex = new RegExp("\\b" + word + "\\b","gi")

                if(str.match(regex) != null)
                console.log("Match : " + str.match(regex))

                if(regex.test(text))
                    str = str.replace(regex, this.matchCase(americanToBritishSpelling[word],  str.match(regex).toString()))
            })
        }else if(locale === "british-to-american"){
            Object.keys(britishOnly).forEach(word =>{
                console.log(word)
                regex = new RegExp("\\b" + word + "\\b","gi")
                if(regex.test(text))
                    str = str.replace(regex, britishOnly[word])
                    
            })

            Object.keys(americanToBritishTitles).forEach(word =>{
                regex = new RegExp("\\b" + americanToBritishTitles[word] + "\\b","gi")
                if(regex.test(text))
                    str = str.replace(regex, word)
            })

            Object.keys(americanToBritishSpelling).forEach(word =>{
                regex = new RegExp("\\b" + americanToBritishSpelling[word] + "\\b","gi")
                if(regex.test(text))
                    str = str.replace(regex, word)
            })
        }

    return {text: text, translation: str}   
    }

}

module.exports = Translator;