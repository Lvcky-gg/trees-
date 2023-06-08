

class Node {
    constructor(val){
        this.val = val
        //pointers
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(val){
        this.root = new Node(val);
        this.count = 1

    }

    size(){
        return this.count

    }

    insert(val){
        this.count++
        let newNode = new Node(val)

        const search = node => {
            if (val < node.val){
                if(!node.left){
                    node.left = newNode
                }else {
                    search(node.left)
                }

            }else if(val > node.val){
                if(!node.right){
                    node.right = newNode
                }else{
                    search(node.right)
                }
            }
        }
        search(this.root)

    }
    min(){
        let curr = this.root

        while (curr.left){
            curr = curr.left
        }
        //returns the smallest node
        return curr
    }
    max(){
        let curr = this.root

        while (curr.right){
            curr = curr.right
        }
        //returns the smallest node
        return curr

    }
    contains(val){
        let curr = this.root

        while(curr){
            if(val === curr.val){
                return true
            }
            if(val < curr.val){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }
    //depth first -- branch by branch
    
    //in-order
    inOrder(){
        let res = []

        const traverse = node => {
            if(node.left)traverse(node.left)
             res.push(node.val)
            if(node.right)traverse(node.right)
            
        }

        traverse(this.root)
        return res

    }
    
    //pre-order
    preOrder(){
        let res = []

        const traverse = node => {
            res.push(node.val)
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
            
        }

        traverse(this.root)

        return res

    }
    
     //post order
    postOrder(){
        let res = []

        const traverse = node => {
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
            res.push(node.val)
            
        }
        traverse(this.root)

        return res

    }
    //breadthFirst level by level
    //queue
    breadthFirst(){
        let res = []
        let que = [this.root]

        while(que.length){
            let curr = que.shift()

            res.push(curr.val)

            if(curr.left){
                que.push(curr.left)
            }
            if(curr.right){
                que.push(curr.right)
            }
        }

        return res

    }
   
}

let bst = new BST(1)
bst.insert(2)
bst.insert(0)
bst.insert(3)
bst.insert(4)
bst.insert(47)
bst.insert(20)
bst.insert(0)
bst.insert(0)
bst.insert(-1)
console.log(bst.size())
console.log(bst.max())
console.log(bst.min())
console.log(bst.contains(202))
console.log(bst.contains(2))
console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())
console.log(bst.breadthFirst())
