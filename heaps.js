function MinHeap(capacity) {
    this.heap_size = 0;
    this.cap = (typeof capacity === "number")?capacity:100;
    this.harr = [this.cap];
    
    this.parent = function(i) {
        return (i-1)/2;
    };
    this.left = function(i) { return (2*i + 1); };

    this.right = function(i) { return (2*i + 2); };

    
}

MinHeap.prototype.add = function(num) {
    if(this.heap_size === this.cap) return -1;
    this.heap_size++;
    this.harr[heap_size-1] = num;
    var i = heap_size-1;
    while (i !== 0 && this.harr[parent(i)] > this.harr[i])
    {   var p = parents(i);
        var t = this.harr[p];
        this.harr[p] = this.harr[i];
        this.harr[i] = t;
        i = parent(i);
    }

};
MinHeap.prototype.remove = function(num) {
    
};
MinHeap.prototype.heapify = function() {
    
};
MinHeap.prototype.extract = function() {
    
};
