/**
 * Definition for node.*/
var FiveEightyNine;
(function (FiveEightyNine) {
    var Node = /** @class */ (function () {
        function Node(val) {
            this.val = val === undefined ? 0 : val;
            this.children = [];
        }
        return Node;
    }());
    //*/
    function preorder(root) {
        var stack = [];
        var output = [];
        if (root == null)
            return output;
        stack.push(root);
        while (stack.length) {
            var node = stack.pop();
            output.push(node.val);
            node.children.reverse();
            node.children.forEach(function (x) { return stack.push(x); });
        }
        return output;
    }
    var ch1 = new Node(3);
    var ch2 = new Node(2);
    var ch3 = new Node(4);
    var pa = new Node(1);
    pa.children = [ch1, ch2, ch3];
    console.log(preorder(pa));
})(FiveEightyNine || (FiveEightyNine = {}));
