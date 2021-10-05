const app = Vue.createApp({
    data() {
        return {
            current: "",
            strings: []
        }
    },
    methods: {
        addStrings() {
            this.handleStrings();

            this.addStringsAsList();

            this.addStringsAsTable();
            
        },
        handleStrings() {
            this.strings.push(this.current);
            this.strings.push(this.current.toLowerCase());
            this.strings.push(this.current.toUpperCase());

            this.current = "";
        },
        addStringsAsList() {
            var output = document.getElementById('output-ol');

            removeChildren(output.id);

            for(i=0; i<this.strings.length; i++) {
                var child = document.createElement("li");
                child.innerHTML = "<p>" + this.strings[i] + "</p>";
                output.appendChild(child);
            }
        },
        addStringsAsTable() {
            var output = document.getElementById('output-table');

            removeChildren(output.id);

            for(i=0; i<this.strings.length; i++) {
                var child = document.createElement("tr");

                var number = document.createElement("td");
                number.innerHTML = i;
                number.style.backgroundColor = "aliceblue";
                child.appendChild(number);

                var string = document.createElement("td");
                string.innerHTML = this.strings[i];
                string.style.backgroundColor = "antiquewhite";
                child.appendChild(string);

                output.appendChild(child);
            }
        },
        clearContent() {
            this.strings = [];

            removeChildren('output-ol');
            removeChildren('output-table');

            this.current = "";
        }
    }
});

function removeChildren(id) {
    var node = document.getElementById(id);
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}

