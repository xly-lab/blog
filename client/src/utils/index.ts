// Created by xiaoqiang on 30/05/2018.
/**
 * @param {numeber} currentY 需要移动的dom当前位置离网页顶端的距离
 * @param {number} targetY 需要移动的dom当前位置离要移到的位置的距离
 */
export function scroll(currentY: number, targetY: number) {
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10);
    _currentY += dist;
    window.scrollTo(_currentY, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10) {
      scroll(_currentY, targetY);
    } else {
      window.scrollTo(_currentY, targetY);
    }
  }, 1);
}
// 暴露此方法
