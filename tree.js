
var BSTtreenode = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
};

function BSTtree() {
    this.root = null;
    
}
BSTtree.prototype.addutil = function(val, curr) {
    
        if (curr.val > val) {
            if(curr.left === null) {
                curr.left = new BSTtreenode(val);
            } else 
            this.addutil(val, curr.left);
        } else {
            if(curr.right === null) {
                curr.right = new BSTtreenode(val);
            } else 
            this.addutil(val, curr.right);
        }
    
};
BSTtree.prototype.add = function(val) {
    if (this.root === null) {
        this.root = new BSTtreenode(val);
        return;
    } else {
        this.addutil(val,this.root);
    }
};
BSTtree.prototype.printtree = function(curr) {
    
    if(curr.left!==null)
        this.printtree(curr.left);
        print(curr.val + ' , ');
    if(curr.right!==null)
        this.printtree(curr.right);

    

};
BSTtree.prototype.printtreePreOrder = function(r) {
};
BSTtree.prototype.printtreePostOrder = function(r) {
};
BSTtree.prototype.treeDepth = function(r) {
};
BSTtree.prototype.treeSize = function(r) {
};
BSTtree.prototype.isidentical = function(r1,r2) {
};
BSTtree.prototype.convertTochildsum = function(curr) {
};
BSTtree.prototype.isChildSum = function(curr) {
};
BSTtree.prototype.leastCommonAncesstor = function(curr) {
};
BSTtree.prototype.pathsum = function(curr) {
};
//Longest consecutive sequence in Binary tree
BSTtree.prototype.pathsum = function(curr) {
};