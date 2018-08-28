<template>
      <div class="content">
        <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <!-- <div class="top part" :style="headBorderStyle"> -->
        <!-- <div class="top parte" :class="[saleBorderClass]"> -->
        <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>

        </div>
        <img v-bind:src="selectedRobot.head.src" title="head"/>
        <button v-on:click="selectHead(0)" class="prev-selector">&#9668;</button>
        <button v-on:click="selectHead(1)" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectLeftArm(0)" class="prev-selector">&#9650;</button>
        <button @click="selectLeftArm(1)" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso"/>
        <button @click="selectTorso(0)" class="prev-selector">&#9668;</button>
        <button @click="selectTorso(1)" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button @click="selectRightArm(0)" class="prev-selector">&#9650;</button>
        <button @click="selectRightArm(1)" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base"/>
        <button @click="selectBase(0)" class="prev-selector">&#9668;</button>
        <button @click="selectBase(1)" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Card</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import availableParts from "../data/parts.js";
import createdHookMixin from "./created-hook-mixins.js";

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
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0
    };
  },
  mixins: [createdHookMixin],
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? "sale-border" : "";
    },
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid gray"
      };
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        base: availableParts.bases[this.selectedBaseIndex]
      };
    }
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;

      this.cart.push(Object.assign({}, robot, { cost }));
    },
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


<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width: 165px;
  }
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
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.sale-border {
  border: 3px solid red;
}
</style>
