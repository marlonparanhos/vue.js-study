<template>
      <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectedHeadIndex].src" title="head"/>
        <button v-on:click="selectHead(0)" class="prev-selector">&#9668;</button>
        <button v-on:click="selectHead(1)" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="availableParts.arms[selectedLeftArmIndex].src" title="left arm"/>
        <button @click="selectLeftArm(0)" class="prev-selector">&#9650;</button>
        <button @click="selectLeftArm(1)" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="availableParts.torsos[selectedTorsoIndex].src" title="torso"/>
        <button @click="selectTorso(0)" class="prev-selector">&#9668;</button>
        <button @click="selectTorso(1)" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="availableParts.arms[selectedRightArmIndex].src" title="right arm"/>
        <button @click="selectRightArm(0)" class="prev-selector">&#9650;</button>
        <button @click="selectRightArm(1)" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="availableParts.bases[selectedBaseIndex].src" title="base"/>
        <button @click="selectBase(0)" class="prev-selector">&#9668;</button>
        <button @click="selectBase(1)" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>


<script>
import availableParts from "../data/parts.js";

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: "RobotBuilder",
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0
    };
  },
  methods: {
    selectHead(head) {
      if (head == 0) {
        this.selectedHeadIndex = getNextValidIndex(
          this.selectedHeadIndex,
          availableParts.heads.length
        );
      } else {
        this.selectedHeadIndex = getPreviousValidIndex(
          this.selectedHeadIndex,
          availableParts.heads.length
        );
      }
    },
    selectLeftArm(arm) {
      if (arm == 0) {
        this.selectedLeftArmIndex = getNextValidIndex(
          this.selectedLeftArmIndex,
          availableParts.arms.length
        );
      } else {
        this.selectedLeftArmIndex = getPreviousValidIndex(
          this.selectedLeftArmIndex,
          availableParts.arms.length
        );
      }
    },
    selectRightArm(arm) {
      if (arm == 0) {
        this.selectedRightArmIndex = getNextValidIndex(
          this.selectedRightArmIndex,
          availableParts.arms.length
        );
      } else {
        this.selectedRightArmIndex = getPreviousValidIndex(
          this.selectedRightArmIndex,
          availableParts.arms.length
        );
      }
    },
    selectTorso(torso) {
      if (torso == 0) {
        this.selectedTorsoIndex = getNextValidIndex(
          this.selectedTorsoIndex,
          availableParts.torsos.length
        );
      } else {
        this.selectedTorsoIndex = getPreviousValidIndex(
          this.selectedTorsoIndex,
          availableParts.torsos.length
        );
      }
    },
    selectBase(torso) {
      if (torso == 0) {
        this.selectedBaseIndex = getNextValidIndex(
          this.selectedBaseIndex,
          availableParts.bases.length
        );
      } else {
        this.selectedBaseIndex = getPreviousValidIndex(
          this.selectedBaseIndex,
          availableParts.bases.length
        );
      }
    }
  }
};
</script>


<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
