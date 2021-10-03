function splitAndMerge(string, separator) {
    var word=string.split(" "),//Створюємо масив слів
        str="";
    for (var key in word) {
      var word_new=word[key].split("").join(separator);//В циклі проходячі по кожному слову розділяємо його на букви і відразу об'єднуємо використовуючи заданий сепаратор
      str=str+word_new+" ";// Об'днуємо утворені слова назад через пробіл
    }
    str=str.substr(0,str.lastIndexOf(" ")) //Відкидаємо останній пробіл в отриманому рядку
    return str
  }