import { data } from "./data.js";
const AudioController = {
    state: {
        audios: [],
        current: {}
    },
    init() {
        this.initVariables();
        this.initEvents();
        this.renderAudios();
    },
    initVariables() {
        this.audioList = document.querySelector(".items");
        this.currentItem = document.querySelector(".current");
    },
    initEvents() {
        this.audioList.addEventListener("click", this.handleItem.bind(this));
    },
    renderCurrentItem(item) {
        const { link, img, genre, track, group, year, duration } = item;
        let min = Math.floor(duration / 60);
        let sec = Math.floor(duration % 60);
        return `
        <div class="current-image" style="background-image: url(resources/img/${img})"></div>
        <div class="current-info">
            <div class="current-info-top">
                <div class="current-info-titles">
                    <h2 class="current-info-titles-groupName">${group}</h2>
                    <h2 class="current-info-titles-trackName">${track}</h2>
                </div>
                <div class="current-info-year">${year}</div>
            </div>
            <div class="controls">
                <div class="controls-buttons">
                    <button class="controls-button controls-prev">
                        <svg class="icon-prev" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.3036 18.5497V5.41692L21.3038 5.41572L21.3036 5.41452V5.35812H21.2978C21.2839 5.20768 21.2144 5.06785 21.1029 4.96594C20.9913 4.86404 20.8458 4.80739 20.6947 4.80708C20.6875 4.80708 20.6808 4.809 20.6738 4.80924H19.5773C19.5602 4.8078 19.5437 4.8042 19.5262 4.8042C19.3647 4.80426 19.2099 4.86843 19.0957 4.98261C18.9815 5.09678 18.9173 5.25161 18.9173 5.41308C18.9173 5.44116 18.9218 5.46828 18.9257 5.4954V11.0492L10.9238 6.42924C10.8668 6.37284 10.7945 6.33434 10.7158 6.31848C10.6372 6.30262 10.5556 6.3101 10.4812 6.33998C10.4067 6.36986 10.3426 6.42086 10.2967 6.48669C10.2509 6.55252 10.2253 6.63032 10.223 6.71052H10.2216V10.3703L3.39551 6.429C3.33845 6.3726 3.26616 6.3341 3.18751 6.31824C3.10886 6.30238 3.02729 6.30986 2.95284 6.33974C2.87838 6.36963 2.81428 6.42062 2.76842 6.48645C2.72256 6.55228 2.69694 6.63008 2.69471 6.71028H2.69351V17.2777C2.69363 17.3597 2.71816 17.4397 2.76397 17.5076C2.80978 17.5756 2.87479 17.6283 2.95071 17.6592C3.02664 17.69 3.11002 17.6975 3.19023 17.6807C3.27043 17.664 3.34382 17.6237 3.40103 17.565L10.2216 13.6271V17.278C10.2217 17.3599 10.2462 17.4399 10.292 17.5079C10.3379 17.5758 10.4029 17.6286 10.4788 17.6594C10.5547 17.6902 10.6381 17.6977 10.7183 17.681C10.7985 17.6642 10.8719 17.6239 10.9291 17.5652L18.9257 12.9484V18.56H18.9288C18.9283 18.5694 18.9259 18.578 18.9259 18.5874C18.926 18.7486 18.99 18.9033 19.1039 19.0174C19.2178 19.1315 19.3724 19.1957 19.5336 19.196H20.6981V19.1903C20.778 19.1903 20.8572 19.1745 20.9311 19.1439C21.005 19.1133 21.0721 19.0685 21.1286 19.0119C21.1852 18.9554 21.23 18.8883 21.2606 18.8144C21.2912 18.7405 21.307 18.6614 21.307 18.5814C21.3067 18.5704 21.3041 18.5603 21.3036 18.5497Z"
                                fill="black" />
                        </svg>
                    </button>
                    <button class="controls-button controls-play">
                        <svg class="icon-pause" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 6C2 4.114 2 3.172 2.586 2.586C3.172 2 4.114 2 6 2C7.886 2 8.828 2 9.414 2.586C10 3.172 10 4.114 10 6V18C10 19.886 10 20.828 9.414 21.414C8.828 22 7.886 22 6 22C4.114 22 3.172 22 2.586 21.414C2 20.828 2 19.886 2 18V6ZM14 6C14 4.114 14 3.172 14.586 2.586C15.172 2 16.114 2 18 2C19.886 2 20.828 2 21.414 2.586C22 3.172 22 4.114 22 6V18C22 19.886 22 20.828 21.414 21.414C20.828 22 19.886 22 18 22C16.114 22 15.172 22 14.586 21.414C14 20.828 14 19.886 14 18V6Z"
                                fill="black" />
                        </svg>
                        <svg class="icon-play" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2817_741)">
                                <path
                                    d="M6 4.00004V20C5.99995 20.178 6.04737 20.3527 6.13738 20.5062C6.22739 20.6597 6.35672 20.7864 6.51202 20.8732C6.66733 20.96 6.84299 21.0038 7.02088 21.0001C7.19878 20.9964 7.37245 20.9453 7.524 20.852L20.524 12.852C20.6696 12.7626 20.7898 12.6373 20.8733 12.4881C20.9567 12.339 21.0005 12.1709 21.0005 12C21.0005 11.8291 20.9567 11.6611 20.8733 11.512C20.7898 11.3628 20.6696 11.2375 20.524 11.148L7.524 3.14804C7.37245 3.0548 7.19878 3.00369 7.02088 2.99997C6.84299 2.99626 6.66733 3.04007 6.51202 3.1269C6.35672 3.21372 6.22739 3.34042 6.13738 3.4939C6.04737 3.64739 5.99995 3.82211 6 4.00004Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2817_741">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button class="controls-button controls-next">
                        <svg class="icon-next" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.3036 18.5497V5.41692L21.3038 5.41572L21.3036 5.41452V5.35812H21.2978C21.2839 5.20768 21.2144 5.06785 21.1029 4.96594C20.9913 4.86404 20.8458 4.80739 20.6947 4.80708C20.6875 4.80708 20.6808 4.809 20.6738 4.80924H19.5773C19.5602 4.8078 19.5437 4.8042 19.5262 4.8042C19.3647 4.80426 19.2099 4.86843 19.0957 4.98261C18.9815 5.09678 18.9173 5.25161 18.9173 5.41308C18.9173 5.44116 18.9218 5.46828 18.9257 5.4954V11.0492L10.9238 6.42924C10.8668 6.37284 10.7945 6.33434 10.7158 6.31848C10.6372 6.30262 10.5556 6.3101 10.4812 6.33998C10.4067 6.36986 10.3426 6.42086 10.2967 6.48669C10.2509 6.55252 10.2253 6.63032 10.223 6.71052H10.2216V10.3703L3.39551 6.429C3.33845 6.3726 3.26616 6.3341 3.18751 6.31824C3.10886 6.30238 3.02729 6.30986 2.95284 6.33974C2.87838 6.36963 2.81428 6.42062 2.76842 6.48645C2.72256 6.55228 2.69694 6.63008 2.69471 6.71028H2.69351V17.2777C2.69363 17.3597 2.71816 17.4397 2.76397 17.5076C2.80978 17.5756 2.87479 17.6283 2.95071 17.6592C3.02664 17.69 3.11002 17.6975 3.19023 17.6807C3.27043 17.664 3.34382 17.6237 3.40103 17.565L10.2216 13.6271V17.278C10.2217 17.3599 10.2462 17.4399 10.292 17.5079C10.3379 17.5758 10.4029 17.6286 10.4788 17.6594C10.5547 17.6902 10.6381 17.6977 10.7183 17.681C10.7985 17.6642 10.8719 17.6239 10.9291 17.5652L18.9257 12.9484V18.56H18.9288C18.9283 18.5694 18.9259 18.578 18.9259 18.5874C18.926 18.7486 18.99 18.9033 19.1039 19.0174C19.2178 19.1315 19.3724 19.1957 19.5336 19.196H20.6981V19.1903C20.778 19.1903 20.8572 19.1745 20.9311 19.1439C21.005 19.1133 21.0721 19.0685 21.1286 19.0119C21.1852 18.9554 21.23 18.8883 21.2606 18.8144C21.2912 18.7405 21.307 18.6614 21.307 18.5814C21.3067 18.5704 21.3041 18.5603 21.3036 18.5497Z"
                                fill="black" />
                        </svg>
                    </button>
                </div>
                <div class="controls-progress">
                    <div class="progress">
                        <div class="progress-current"></div>
                    </div>
                    <div class="timeline">
                        <span class="time-start">00:00</span>
                        <span class="time-end">${min}:${sec}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    setCurrentItem(itemId) {
        const current = this.state.audios.find(({ id }) => id == itemId);
        if (!current) return;
        this.state.current = current;
        console.log(current);
        this.currentItem.innerHTML = this.renderCurrentItem(current);
    },
    handleItem({ target }) {
        const { id } = target.dataset;
        if (!id) return;
        this.setCurrentItem(id);
        console.log(id);
    },
    renderAudios() {
        data.forEach((e) => {
            const audio = new Audio(`./resources/audio/${e.link}`);
            audio.addEventListener('loadeddata', () => {
                const newItem = { ...e, duration: audio.duration, audio }
                this.state.audios = [...this.state.audios, newItem];
                this.loadAudioData(newItem);
                // console.log(this.state.audios);
            })
        })
    },
    loadAudioData(audio) {
        // console.log(audio);
        const { id, link, img, genre, track, group, year, duration } = audio;
        let min = Math.floor(duration / 60);
        let sec = Math.floor(duration % 60);
        const item = ` <div class="item" data-id="${id}">
                        <div class="item-image" style="background-image: url(resources/img/${img})"></div>
                        <div class="item-titles">
                            <h2 class="item-group">${group}</h2>
                            <h2 class="item-track">${track}</h2>
                        </div>
                        <p class="item-duration">${min}:${sec}</p>
                        <p class="item-genre">${genre}</p>
                        <button class="item-play">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2817_741)">
                                    <path
                                        d="M6 4.00004V20C5.99995 20.178 6.04737 20.3527 6.13738 20.5062C6.22739 20.6597 6.35672 20.7864 6.51202 20.8732C6.66733 20.96 6.84299 21.0038 7.02088 21.0001C7.19878 20.9964 7.37245 20.9453 7.524 20.852L20.524 12.852C20.6696 12.7626 20.7898 12.6373 20.8733 12.4881C20.9567 12.339 21.0005 12.1709 21.0005 12C21.0005 11.8291 20.9567 11.6611 20.8733 11.512C20.7898 11.3628 20.6696 11.2375 20.524 11.148L7.524 3.14804C7.37245 3.0548 7.19878 3.00369 7.02088 2.99997C6.84299 2.99626 6.66733 3.04007 6.51202 3.1269C6.35672 3.21372 6.22739 3.34042 6.13738 3.4939C6.04737 3.64739 5.99995 3.82211 6 4.00004Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2817_741">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>`;
        this.audioList.innerHTML += item;
    }

}
AudioController.init();