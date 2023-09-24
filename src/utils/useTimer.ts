import { computed, ref } from "vue";

export const useTimer = () => {
  const startTime = ref(new Date().getTime());
  const currentTime = ref(new Date().getTime());
  const stop = ref(false);

  const timeCounter = computed(() => {
    const d = currentTime.value - startTime.value;
    const s = Math.round(d / 1000);
    return `${Math.floor(s / 60)}分${s % 60}秒`;
  });

  const restartTimer = () => {
    startTime.value = new Date().getTime();
    resumeTimer();
  };

  const stopTimer = () => {
    stop.value = true;
  }

  const resumeTimer = () => {
    stop.value = false;
    requestAnimationFrame(timeCountLoop);
  }

  // 循环更新当前时间
  const timeCountLoop = () => {
    currentTime.value = new Date().getTime();
    if (!stop.value) {
      requestAnimationFrame(timeCountLoop);
    }
  };
  requestAnimationFrame(timeCountLoop);

  return { restartTimer, stopTimer, resumeTimer, timeCounter };
};
