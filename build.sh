echo 'node_modules' > .gitignore
mkdir -p build
echo 'aaa' >  build/aaa.txt
echo 'bbb' >  build/bbb.txt
mkdir -p build/dir
echo 'bbb' >  build/dir/ccc.txt
npm -v
env | sort

export NVM_DIR="/root/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ]   && \. "$NVM_DIR/nvm.sh"  
nvm use 14
npm -v
node -v
