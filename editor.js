var vue = new Vue({
    el: "#app",
    data: {
        markdownText: "# Hello World\n- something\n- something\n\n# another list\n\n1. something else\n2. something else"
    },
    computed:{
        previewMarkdown: function() {
            return sanitizeHtml(marked(this.markdownText),
             {allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img', 'h1', 'h2' ])});
        }
    },
    methods: {
        update: _.debounce(function(e){
            this.markdownText = e.target.value;
        }, 300)
    }
});