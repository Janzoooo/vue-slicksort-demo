<template>
  <div>
  <div>
      <SortableList helperClass="highlight" @sort-start="sortStart" @sort-end="sortEnd" @input="input" v-model="items">
        <SortableItem  v-for="(item, index) in items" :index="index" collection="items"  :key="index" :item="item"/>
      </SortableList>

  </div>
  <div id="root2" style="width: 100px;height: 100px ;border:1px solid green;">
  </div>
  </div>
</template>

<script>
  import { ContainerMixin, ElementMixin , HandleDirective} from 'vue-slicksort';

  const SortableList = {
    mixins: [ContainerMixin],
    template: `
    <table class="list">
      <slot  />
    </table>
  `,
  };

  const SortableItem = {
    mixins: [ElementMixin],
    props: ['item'],
    template: `
<tr>
<td>{{ index+1 }}</td>
<td>{{ item }}</td>
</tr>
    <!--<li class="list-item">{{item}}</li>-->
  `,
  };


  export default {
        name: "vue-slicksort-2",
        scrollToTop:true,
        components: {
          SortableItem,
          SortableList,
        },
        data() {
          return {
            items: ['Item 1' ,'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
            num:500,
            flag:true,
            beforeSortItems:[],
          };
        },
    methods:{
      sortEnd(event){
        if(event.event.target.id == "root2"){
         alert("yeah")
        }
      },
      sortMove(event,a,b,c){

      },
      sortStart(event,a,b,c){

        this.beforeSortItems = this.items;
      },
      input(event,a,b,c){

        this.items = this.beforeSortItems;
      },

    }

  }
</script>

<style  scoped>
  .list {
    width: 50%;
    max-height: 80vh;
    margin: 0 auto;
    padding: 0;
    overflow: auto;
    background-color: #f3f3f3;
    border: 1px solid #efefef;
    border-radius: 3px;
  }
  .list-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
    user-select: none;
    color: #333;
    font-weight: 400;
  }
  .highlight{
    background-color: dodgerblue;
  }

</style>
