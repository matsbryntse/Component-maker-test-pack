StartTest(function(t) {
    new My.view.ScrumPanel().destroy();

    t.pass('Destroy ok without rendering');

    new My.view.ScrumPanel({ renderTo : document.body}).destroy();

    t.pass('Destroy ok when rendering');
})
