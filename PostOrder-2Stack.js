/*
Post Order Traversal : Iterartive Approach : 2 Stacks
- Use 2 stacks : s1 for processing nodes and s2 for storing it in reverse order.
- Push root to s1.
- WHile s1 is not empty.
- Pop from s1 and move to curr and push to s2.
- Push left and right child to s1.
- After processing , pop from s2 and store node values in ans.
*/

var postorderTraversal = function (root) {
    if (!root) return [];
    let s1 = [root];
    let s2 = [];
    let ans = [];
    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr.val);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    while (s2.length) {
        ans.push(s2.pop());
    }
    return ans;
};
