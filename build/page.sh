rm -rf _page
mkdir _page
cp dist/webclip.css _page/webclip.css
cp dist/webclip.js _page/webclip.js
cp example/index.html _page/index.html
cd _page
git init
git add -A
git commit -m 'update homepage'
git push -f git@github.com:djyde/WebClip.git master:gh-pages
