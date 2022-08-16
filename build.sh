echo 'node_modules' > .gitignore
mkdir -p build
echo 'aaa' >  build/aaa.txt
echo 'bbb' >  build/bbb.txt
mkdir -p build/dir
echo 'bbb' >  build/dir/ccc.txt
npm -v
