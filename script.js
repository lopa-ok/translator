document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const translateButton = document.getElementById('translateButton');
    const inputCode = document.getElementById('inputCode');
    const outputCode = document.getElementById('outputCode');

    translateButton.addEventListener('click', function() {
        let code = inputCode.value.trim();

        if (toggleButton.checked) {
            code = translatePython3toPython2(code);
        } else {
            code = translatePython2toPython3(code);
        }

        outputCode.value = code;
    });

    function translatePython3toPython2(code) {
        code = code.replace(/print\s+\("([^"]*)"\)/g, 'print "$1"');
        code = code.replace(/print\s+\('([^']*)'\)/g, "print '$1'");
        code = code.replace(/print\s+\((.*)\)/g, 'print $1');

        code = code.replace(/\brange\b/g, 'xrange');

        code = code.replace(/([^\/\*])\/\/([^\/])/g, '$1/$2');

        code = code.replace(/except\s+(\w+)\s+as\s+(\w+):/g, 'except $1, $2:');

        code = code.replace(/(['"])([^'"]*?)\1/g, "u$1$2$1");

        return code;
    }

    function translatePython2toPython3(code) {
        code = code.replace(/print\s+"([^"]*)"/g, 'print("$1")');
        code = code.replace(/print\s+'([^']*)'/g, "print('$1')");
        code = code.replace(/print\s+(.*)/g, 'print($1)');

        code = code.replace(/\bxrange\b/g, 'range');


        code = code.replace(/except\s+(\w+),\s+(\w+):/g, 'except $1 as $2:');

        code = code.replace(/u(['"])/g, '$1');

        return code;
    }
});

