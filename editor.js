var vue = new Vue({
    el: "#app",
    data: {
        markdownText: "# Hello World\n- something\n- something\n\n# another list\n\n1. something else\n2. something else",
        editorShow: true,
        previewShow: true,
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
        }, 300),
        toggleEditorView: function(e) {
            this.editorShow = !this.editorShow;
            if (!this.editorShow) {
                document.getElementById("previewFullscreen").disabled = true;
            }
            else {
                document.getElementById("previewFullscreen").disabled = false;
            }
        },
        togglePreviewView: function(e) {
            this.previewShow = !this.previewShow;
            if (!this.previewShow) {
                document.getElementById("editorFullscreen").disabled = true;
            }
            else {
                document.getElementById("editorFullscreen").disabled = false;
            }
        }
    }
});