function SinglyLinkedList() {
    this.head = null;
    this.node = function(v, n) {
        this.val = (v) ? v : 0;
        this.next = (n) ? n : null;
        return this;
    };
}

SinglyLinkedList.prototype.add = function(num) {
    if (this.head === null) {
        this.head = new this.node(num, this.head);

    } else {
        var temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = new this.node(num);

    }
};
SinglyLinkedList.prototype.print = function() {
    if (this.head === null) {
        print("List is empty !");
    } else {
        var temp = this.head;
        while (temp !== null) {
            print(" " + temp.val);
            temp = temp.next;
        }
    }
};
SinglyLinkedList.prototype.length = function() {
    var cn = this.head;
    var len = 0;
    if (cn === null) {
        return 0;
    } else {
        while (cn !== null) {
            cn = cn.next;
            len++;
        }
    }
    return len;
};
SinglyLinkedList.prototype.removeNodeatposition = function(pos) {
    // assuming length is not given
    var temp;
    if (pos === 0) {
        temp = this.head;
        this.head = this.head.next;
        temp = null;
    } else

    {
        var cn = this.head;
        while (cn.next !== null) {
            pos--;
            if (pos === 0) {
                 temp = cn.next;
                cn.next = temp.next;
                temp = null;
            }
            cn = cn.next;
        }
    }
};
SinglyLinkedList.prototype.removeNodebyValue = function(val) {
    if (this.head && val === this.head.val) {
        var temp = this.head;
        this.head = this.head.next;
        temp = null;
    } else {
        var cn = this.head;
        while (cn.next !== null) {
            if (cn.next.val === val) {
                var temp = cn.next;
                cn.next = temp.next;
                temp = null;
                return; // psw imp
            }
            cn = cn.next;
        }


    }
};
SinglyLinkedList.prototype.reverse = function() {
    var prev = null;
    var next = null;
    var curr = this.head;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
};
SinglyLinkedList.prototype.mergetwosortedlists = function(h1, h2) {
    var res = new SinglyLinkedList();

};

SinglyLinkedList.prototype.deleteNode = function(n) {
    n = this.head;
    var next = null;
    while (n !== null) {
        next = n.next;
        n.val = next.val;
        n.next = next.next;
    }
    //psw doesnt work
    n = null;
};
SinglyLinkedList.prototype.returnmiddleoflist = function() {
    var curr = this.head;
    var runner = curr;
    while (runner !== null) {
        runner = runner.next;
        runner = runner.next;
        curr = curr.next;
    }
    return curr;

};
//8
SinglyLinkedList.prototype.detectLoop = function() {
    var fast = this.head.next;
    var slow = this.head;
    while (!fast || !slow) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next; // does splitting in 2 lines really help ?
        fast = fast.next;

    }
    return false;
};

//9 9. Write a function that counts the number of times a given int occurs in a Linked List
// countdatavalue(this.head, 2)
SinglyLinkedList.prototype.countdatavalue = function(node, value) {
    if (node === null) return 0;
    if (node.val === value) {
        return 1 + countdatavalue(node.next, value);
    } else {
        return 0 + countdatavalue(node.next, value);
    }
};

//10 10. Write a function to delete a Linked List
SinglyLinkedList.prototype.deleteLinkedlist = function() {
    var temp = null;
    while (this.head !== null) {
        temp = this.head;
        this.head = this.head.next;
        temp = null;
    }

};

//11. Find n’th node from the end of a Linked List
SinglyLinkedList.prototype.nthNodefromEnd = function(n) {
    var fwd = null;
    while (n > 0 || fwd !== null) {
        fwd = fwd.next;
        n--;
    }
    var curr = this.head;
    while (fwd !== null) {
        curr = curr.next;
        fwd = fwd.next;
    }
    return fwd;
};
//14. Write a recursive function to print reverse of a Linked List
SinglyLinkedList.prototype.printrecursivell = function(node) {
    if (node === null) return;
    else {
        printrecursivell(node.next);
        print(node.val);
    }

};
// 19. Add two numbers represented by linked lists 
SinglyLinkedList.prototype.add2numbers = function(l1, l2) {
    // 1-2-3
    // 2-9
    // 3-1-4   
    var resl = new SinglyLinkedList();

    var res = 0,
        carry = 0;
    while (l1 !== null && l2 !== null) {
        res = (l1.val + l2.val);
        res = res + carry;
        carry = res % 10;
        resl.add(res);
    }
    var temp;
    if (l1 === null) {
        temp = l2;

    } else {
        temp = l1;
    }
    while (temp !== null) {
        resl.add(temp.val);
    }


};
//12. Split a Circular Linked List into two halves --
SinglyLinkedList.prototype.splitCircularlist = function() {
    var list1head = this.head;
    var fast = this.head;
    var slow = this.head.next.next;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
        fast = fast.next;

    }
    var list2head = slow.next;
    slow.next = null;
    while (list2head.next !== list1head) {
        list2head = list2head.next;
    }
    lis2head.next = null;
};
// 20. Add two numbers represented by linked lists 
SinglyLinkedList.prototype.rotatebyK = function(k) {
    var orighead ,  curr ;
    orighead = curr = this.head;
    while(k>0 || curr!==null){
        k--;
        curr = curr.next;
    }
    var temp = curr;
    this.head = curr.next;
    curr.next = null;
    while(temp!==null){
        temp = temp.next;
    }
    temp.next = orighead;
    
};
//23. Sort a linked list of 0s, 1s and 2s
SinglyLinkedList.prototype.sort012 = function(l1) {

};