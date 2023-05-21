<script>
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { degToRad } from 'three/src/math/MathUtils'
</script>

<div>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

		<slot />
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
