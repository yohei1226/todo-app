'use strict'; {
//     Vue.component('form-tag', {
//         template: `<div><form v-on:submit.prevent>

//       <input type="text" v-model="newItem">
//       <button v-on:click="addItem">add</button>

//   </form></div>`,

//         data: function () {
//             return {
//                 todos: [],
//                 newItem: '',
//                 id: 1,
                
//             }
//         },
    //     methods: {
    //         addItem: function (event) {
    //             if (this.newItem === '') {
    //                 return;
    //             }
    //             let items = {
    //                 item: this.newItem,
    //                 isDone: false,
    //                 id: 0,
    //             }

    //             this.todos.push(items)
    //             items.id = this.id++
    //             this.newItem = ''

    //         },
            
    //     }

    // });
// 上記のコンポーネントを試みたができず！！

    var vm = new Vue({
        el: '#app',
        data: {
            todos: [],
            newItem: '',
            id: 1,
            sort: '',

        },
        


        methods: {
            addItem: function (event) {
                if (this.newItem === '') {
                    return;
                }
                let items = {
                    item: this.newItem,
                    isDone: false,
                    id: 0,
                }


                this.todos.push(items)
                items.id = this.id++
                this.newItem = ''

            },

            deleteItem: function (index) {

                this.todos.splice(index, 1)

            },

            purge: function () {
                if (!confirm('選択されたタスクを削除しますか？')) {
                    return;
                }
                this.todos = this.todos.filter(function (todo) {
                    return !todo.isDone;
                });

            },

        },






    });




    // computed:{
    //     sortedList:function(){
    //         if(this.sort === asc){

    //         }else if{

    //         }else{

    //         }
    //     }
    // }
}