<script>
	import RenderScene from '$lib/comp/render-scene.svelte'
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { degToRad } from 'three/src/math/MathUtils'
</script>

<Canvas>
	<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
		<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
	</T.PerspectiveCamera>

	<RenderScene />
</Canvas>