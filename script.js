document.getElementById('translateButton').addEventListener('click', function() {
    const inputCode = document.getElementById('inputCode').value;

    
    let outputCode = inputCode;

    
    outputCode = outputCode.replace(/print\s+"([^"]*)"/g, 'print("$1")');
    outputCode = outputCode.replace(/print\s+'([^']*)'/g, "print('$1')");
    outputCode = outputCode.replace(/print\s+(.*)/g, 'print($1)');

    
    outputCode = outputCode.replace(/\bxrange\b/g, 'range');

    
    outputCode = outputCode.replace(/([^\/\*])\/([^\/])/g, '$1//$2');

    
    outputCode = outputCode.replace(/except\s+(\w+),\s+(\w+):/g, 'except $1 as $2:');

    
    outputCode = outputCode.replace(/u(['"])/g, '$1');

    

    document.getElementById('outputCode').value = outputCode;
});
