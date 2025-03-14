<template>
  <div>This page is to test stuff</div>

  <div class="flex">
    <div class="test p-1">
      <v-icon name="hi-solid-home" fill="green" scale="1.5" />
      <p>MY STATS</p>
    </div>
    <div class="test p-1">
      <v-icon name="hi-solid-home" fill="green" scale="1.5" />
    </div>
  </div>
</template>

<script></script>

<style>
.test {
  display: flex;
  border-radius: 20px;
  background-color: grey;
  width: 37px;
  transition: width 0.5s;
  overflow: hidden;
}

.test:hover {
  background-color: white;
  width: 150px;
}

.test p {
  opacity: 0;
  visibility: hidden;
  transition: width 0.3s ease-in-o ut 0.5s;
  margin-left: 2px;
  margin-top: 1px;
  white-space: nowrap;
  font-family: monospace;
  color: black;
  font-size: 16px;
  width: 100%;
  text-align: center;
}

.test:hover p {
  opacity: 1;
  visibility: visible;
}
</style>
