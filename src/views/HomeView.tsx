<template>
  <div>
    <button @click="openGradient" class="gradient-button">Explore Collection</button>
    <button @click="openPiece" class="piece-button">Explore Piece</button>
    <button @click="observeState" class="state-button">Observe State</button>
  </div>
</template>

<script>
export default {
  methods: {
    openGradient() {
      window.open('https://hotprinti.com.br/hiddenlayer/product/68a906a1-5f0a-4f37-9bea-fd11f12653bc/', '_blank', 'noopener,noreferrer');
    },
    openPiece() {
      window.open('https://hotprinti.com.br/hiddenlayer/product/1399bc85-c2d6-4ee9-b2de-a239afd91ca0/', '_blank', 'noopener,noreferrer');
    },
    observeState() {
      window.open('https://hotprinti.com.br/hiddenlayer/product/1399bc85-c2d6-4ee9-b2de-a239afd91ca0/', '_blank', 'noopener,noreferrer');
    }
  }
}
</script>