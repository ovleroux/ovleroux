export function renderLoadingScreen(){
    return `<div style="display:flex" class="load-swipe">
    <div class="overflow-hidden">
        <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
            class="loading one">WELCOME</div>
    </div>
    <div style="display:none" class="loading four">WELCOME</div>
    <div style="display:none" class="loading three">WELCOME</div>
    <div style="display:none" class="loading two">WELCOME</div>
    </div>` 
}
