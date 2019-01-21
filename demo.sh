if [ -d $1 ]; then
    echo 'error: dir exists'
    exit
else
    mkdir $1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js

    echo > index.html
    echo '<!DOCTYPE>' > index.html
    echo '<title>Hello</title>' >> index.html
    echo '<h1>Hi</h1>' >> index.html

    cd css
    echo > style.css
    echo 'h1{color: red;}' >> style.css

    cd ../js
    echo > main.js
    echo 'var string = "Hello World"' >> main.js
    echo 'alert(string)' >> main.js

    echo 'success'
    exit
fi

