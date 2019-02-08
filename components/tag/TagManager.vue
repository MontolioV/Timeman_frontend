<template>
  <b-form 
    @submit.prevent="addTag" 
    @keypress.enter="addTag">
    <b-form-group
      id="tagInputGroup"
      :label="formLabel"
      label-for="tagInput"
      description="No duplicates allowed.">
      <b-form-input 
        id="tagInput"
        v-model="tagInput"
        type="text"
        placeholder="Type tag and press enter"/>
    </b-form-group>
    <h6>Tags:</h6>
    <div class="d-flex flex-wrap justify-content-between">
      <div
        v-for="(tag,idx) of tagsArr" 
        :key="idx+tag" 
        class="tag-btn">
        <b-input-group 
          :prepend="tag" 
          size="sm">
          <b-input-group-append>
            <b-btn 
              variant="danger" 
              @click="removeTag(idx)">
              <font-awesome-icon icon="times-circle" />
            </b-btn>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  name: 'TagManager',
  props: {
    tagsArr: {
      type: Array,
      required: true,
    },
    formLabel: {
      type: String,
      required: true,
    },
  },
  data() {
    return { tagInput: '' };
  },
  methods: {
    addTag() {
      if (!this.tagInput) {
        return;
      }
      this.tagInput = this.tagInput.trim();
      if (!this.tagInput) {
        return;
      }

      const exists = this.tagsArr.find(elem => elem === this.tagInput);
      if (!exists) {
        this.tagsArr.push(this.tagInput);
      }
      this.tagInput = '';
    },
    removeTag(idx) {
      this.tagsArr.splice(idx, 1);
    },
  },
};
</script>

<style scoped>
.tag-btn {
  padding: 3px;
}
</style>
