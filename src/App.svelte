<script>
	import LockDropDown from "./LockDropDown.svelte"

    const onLockChange = (e) => {
        let checked = !!e.target.checked
        let charType = e.target.dataset.nameFor

        if ( charType ) dataObj[charType].locked = checked
    }

	let dataObj = {
		archtype: {
            locked: false,
            items: ["aaa","bbb","ccccc"]
        },

		flaws: {
            locked: false,
            items: ["aaa","ppppp","kkkkkkkkkkk"]
        },

		adverbs: {
            locked: true,
            items: ["bbbbb","wewewe","poioui"]
        },

		verts: {
            locked: false,
            items: ["ccccc","sdfgsd","zxczxc"],
        },

		roles: {
            locked: false,
            items: ["dddddd","fgfgfgfg","weyuywue"]
        }
	}

    const shuffleArr = (array) => {
        var currentIndex = array.length,  randomIndex;

        while (currentIndex != 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const shuffleData = () => {
        for (const property in dataObj) {
            if (!dataObj[property].locked) {
                dataObj[property].items = shuffleArr(dataObj[property].items) 
            }
        }
    }
</script>

<main>
	<h1>Character Aid</h1>

	<button on:click="{ shuffleData }" >Generate</button>

	<LockDropDown name="Archtype" listItems="{ dataObj.archtype.items }" locked="{ dataObj.archtype.locked }" { onLockChange } />
	<LockDropDown name="Flaws" listItems="{ dataObj.flaws.items }" locked="{ dataObj.flaws.locked }" { onLockChange } />
	<LockDropDown name="Adverbs" listItems="{ dataObj.adverbs.items }" locked="{ dataObj.adverbs.locked }" { onLockChange }/>
	<LockDropDown name="Verts" listItems="{ dataObj.verts.items }" locked="{ dataObj.verts.locked }" { onLockChange }/>
	<LockDropDown name="Roles" listItems="{ dataObj.roles.items }" locked="{ dataObj.roles.locked}" { onLockChange } />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

    pre {
        width: 50%;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
