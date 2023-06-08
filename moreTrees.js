const setWord = (word) => {
    let str = ""
    if(typeof word === "number")return word

    for(let i = 0; i < word.length; i++){
        const letter = word[i].toLowerCase()
        if (letter === "a")str+=101
        else if (letter === "b")str+=111
        else if (letter === "c")str+=201
        else if (letter === "d")str+=301
        else if (letter === "e")str+=401
        else if (letter === "f")str+=501
        else if (letter === "g")str+=601
        else if (letter === "h")str+=701
        else if (letter === "i")str+=801
        else if (letter === "j")str+=901
        else if (letter === "k")str+=111
        else if (letter === "l")str+=211
        else if (letter === "m")str+=221
        else if (letter === "n")str+=231
        else if (letter === "o")str+=241
        else if (letter === "p")str+=251
        else  if (letter === "q")str+=261
        else if (letter === "r")str+=271
        else if (letter === "s")str+=281
        else if (letter === "t")str+=291
        else if (letter === "u")str+=301
        else if (letter === "v")str+=311
        else if (letter === "w")str+=321
        else if (letter === "x")str+=331
        else if (letter === "y")str+=341
        else if (letter === "z")str+=351
        


    }
     return parseInt(str)
}

const returnWord = (val) => {
    if(val.toString().length % 3 !== 0)return val
    const lettersLen = val.toString().length /3
    const letterArr = []
    let str = ""
    for(let i = 0; i < lettersLen -1; i++){
        letterArr.push(val.toString().slice(0,3))
      
        val = val.toString().slice(3, val.length)
       
    }
    letterArr.push(val)
    for(let i = 0; i < letterArr.length; i++){
        const letter = letterArr[i]
        if (letter === "101")str+="a"
        else if (letter === "111")str+="b"
        else if (letter === "201")str+="c"
        else if (letter === "301")str+="d"
        else if (letter === "401")str+="e"
        else if (letter === "501")str+="f"
        else if (letter === "601")str+="g"
        else if (letter === "701")str+="h"
        else if (letter === "801")str+="i"
        else if (letter === "901")str+="j"
        else if (letter === "111")str+="k"
        else if (letter === "211")str+="l"
        else if (letter === "221")str+="m"
        else if (letter === "231")str+="n"
        else if (letter === "241")str+="o"
        else if (letter === "251")str+="p"
        else  if (letter === "261")str+="q"
        else if (letter === "271")str+="r"
        else if (letter === "281")str+="s"
        else if (letter === "291")str+="t"
        else if (letter === "301")str+="u"
        else if (letter === "311")str+="v"
        else if (letter === "321")str+="w"
        else if (letter === "331")str+="x"
        else if (letter === "341")str+="y"
        else if (letter === "351")str+="z"

    }

    return str[0].toUpperCase() + str.slice(1, str.length)

}

const fetchNames = arr => {
    for(let i = 0; i < arr.length; i++){
        [arr[i]] = [returnWord(arr[i])]
    }
    return arr
}

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
        this.root = new Node(setWord(val));
        this.count = 1

    }

    size(){
        return this.count

    }

    insert(val){
        this.count++
        let newNode = new Node(setWord(val))

        const search = node => {
            if (setWord(val) < node.val){
                if(!node.left){
                    node.left = newNode
                }else {
                    search(node.left)
                }

            }else if(setWord(val) > node.val){
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
        return curr.val
    }
    max(){
        let curr = this.root

        while (curr.right){
            curr = curr.right
        }
        //returns the smallest node
        return curr.val

    }
    contains(val){
        let curr = this.root

        while(curr){
            if(setWord(val) === curr.val){
                return true
            }
            if(setWord(val) < curr.val){
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

let bst = new BST("John")
// console.log(bst)
bst.insert("Sam")
bst.insert("Betty")
bst.insert(0)
bst.insert(3)
bst.insert(4)
bst.insert(99999)
bst.insert(20)
bst.insert(0)
bst.insert(0)
bst.insert(-1)
// console.log(bst.size())
// console.log(bst.max())
// console.log(bst.min())
// console.log(bst.contains(202))
// console.log(bst.contains("John"))
// console.log(bst.inOrder())
// console.log(bst.preOrder())
// console.log(bst.postOrder())
// console.log(bst.breadthFirst())

const namesInOrder = fetchNames(bst.inOrder())
console.log(namesInOrder)
const namesPreOrder = fetchNames(bst.preOrder())
console.log(namesPreOrder)
const namesPostOrder = fetchNames(bst.postOrder())
console.log(namesPostOrder)
