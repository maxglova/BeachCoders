
// Wrapping everything in a function
const stickyNotes = function() {
    const model = {
        init() {
            if(!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add(obj){
            const data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes() {
            return JSON.parse(localStorage.notes);
        }
    };

    const controller = {
        addNewNote(noteStr) {
            model.add({content: noteStr,});
            view.render();
        },

        getNotes() {
            return model.getAllNotes();
        },

        init() {
            model.init();
            view.init();
        },
    };

    const view = {
        init() {
            const notes = document.querySelector('notes');
            this.noteList = notes;
            const newNoteForm = $('#new-note-form');
            const newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                controller.addNewNote(newNoteContent.val());
                newNoteContent.val(''); // .val is jQuery
                e.preventDefault()
            });
            view.render();
        },
        render() {
            let htmlStr = '';
            controller.getNotes().forEach(function(note){
                htmlStr += `<li class="note">${note.content}</li>`
            });
            this.noteList.html(htmlStr);  
        },
    };
    controller.init();
};

stickyNotes();