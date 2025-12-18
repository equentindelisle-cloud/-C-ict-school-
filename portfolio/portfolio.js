function dark() {
    if (document.body.style.backgroundColor === '#1a1a1a') {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    } else {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = 'white';
    }
}
