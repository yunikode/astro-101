<script>
    function specialFunction() {
        alert('you clicked the svelte button')
    }
</script>

<button on:click={specialFunction}>
    <slot/>
</button>