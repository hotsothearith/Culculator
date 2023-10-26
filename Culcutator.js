    let outputscreen=
        document.getElementById('output-screen');
    function diplay(num){
        outputscreen.value += num
    }
    function calcutate()
    {
        try
        {
            outputscreen.value=eval(outputscreen.value)
        }
        catch(err)
        {
            alert("Invalid")
        }
    }
    function del()
    {
        outputscreen.value=outputscreen.value=
        outputscreen.value.slice(0,-1)
    }