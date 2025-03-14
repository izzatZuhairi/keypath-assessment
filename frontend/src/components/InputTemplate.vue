<template>
  <div class="rounded-xl w-3i/5">
    <label :for="inputData" class="mt-4 inline-block mb-0.5 uppercase font-bold">{{ label }}</label>
    <input
      class="bg-gray-700 p-2 block w-md m-auto rounded-xl"
      :value="modelValue"
      :type="type"
      :id="inputData"
      :name="inputData"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputTemplate',
  props: {
    modelValue: { type: String },
    label: { type: String },
    type: { type: String },
    inputData: { type: String },
  },
  emits: ['update:modelValue'],
}
</script>
