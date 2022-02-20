/* Passed all test cases, but fixing the tail is not a good design */


const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

let list1 = new SinglyLinkedList();
list1.insertNode(4);
list1.insertNode(5);
list1.insertNode(6);
let list2 = new SinglyLinkedList();
list2.insertNode(1);
list2.insertNode(2);
list2.insertNode(10);

function mergeLists(head1, head2) {
    let list3 = new SinglyLinkedList();
    
    while (head1 != null && head2 != null) {
        if (head1.data < head2.data) {
            list3.insertNode(head1.data);
            head1 = head1.next;
        } else if (head1.data > head2.data) {
            list3.insertNode(head2.data);
            head2 = head2.next;
        } else {
            list3.insertNode(head1.data);
            head1 = head1.next;
        }
        if (head1 == null) {
            list3.tail.next = head2;
            list3.tail = list2.tail; // not a good design
            break;
        }
        if (head2 == null) {
            list3.tail.next = head1;
            list3.tail = list1.tail; // not a good design
            break;
        }
    }
    return list3.head;
   
}

console.log(mergeLists(list1.head, list2.head));

