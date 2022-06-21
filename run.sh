if [  -f '.npmignore' ]; then
    echo "[CYCLIC] found .npmignore. Removing excluded files..."
    cp .gitignore .gitignore_bak
    cp .npmignore .gitignore
    # git status
    # git rm -r --cached . || true
    echo '======'
    cat .gitignore
    echo '======'
    git clean -ndX -f
    cp .gitignore_bak .gitignore
    rm .gitignore_bak
fi