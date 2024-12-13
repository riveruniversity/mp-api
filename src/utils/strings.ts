
String.prototype.escapeSql = function () {
  return this.replace(/%|(?<=\w)'(?=\w)/g, function (char) {
    switch (char) {
      case "\0":
        return "\\0";
      case "\x08":
        return "\\b";
      case "\x09":
        return "\\t";
      case "\x1a":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "%":
        return "%25"
      case "'":
        return "''"
      case "\"":
      case "\\":
        return "\\" + char; // prepends a backslash to backslash, percent,
      // and double/single quotes
      default:
        return char;
    }
  });
}