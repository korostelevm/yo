if [  -f '.npmignore' ]; then
    echo "[CYCLIC] found .npmignore. Removing excluded files..."
    cp .npmignore .gitignore
    # git status
    # git rm -r --cached . || true
    git clean -X -f
fi