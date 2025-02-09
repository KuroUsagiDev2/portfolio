<script setup lang="ts">
	import { Head } from "@inertiajs/vue3";
	import Techs from "@/Components/Techs.vue";
</script>

<template>
	<Head title="Experience" />

	<section class="bg-gray-900 text-white py-24">
		<div class="px-6 max-w-screen-lg mx-auto">
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center text-gray-100">Work Experience</h1>

			<div class="prose prose-invert prose-lg text-gray-300 max-w-none">
				<div class="relative border-l border-gray-700 pl-6 space-y-12">
					<!-- Experience Block -->
					<div class="relative pb-10">
						<img src="/images/logo_unasam.png" alt="UNASAM" class="w-12 h-16 z-20 mb-4" />
						<h2 class="text-2xl font-semibold text-gray-100">Lead Developer/Analyst (2016 - Present)</h2>
						<h3 class="text-xl text-gray-400">National University of Santiago Antúnez de Mayolo</h3>
						<ul class="list-disc list-inside mt-4 space-y-2">
							<li>Led the development of <strong>SGA UNASAM</strong>, a university academic management system, reducing process times by <strong>73%</strong>.</li>
							<li>Integrated APIs for records, enrollment, and financial transactions, reducing errors by <strong>40%</strong>.</li>
							<li>Deployed and managed applications on <strong>AWS (EC2, S3, RDS)</strong> with strong security measures.</li>
						</ul>
					</div>

					<div class="relative pb-10">
						<img src="/images/logo_unia.png" alt="UNIA" class="w-12 h-16 rounded-full mb-4" />
						<h2 class="text-2xl font-semibold text-gray-100">Semi Senior Fullstack Developer (2020 - 2024)</h2>
						<h3 class="text-xl text-gray-400">National University of the Amazon</h3>
						<ul class="list-disc list-inside mt-4 space-y-2">
							<li>Lead developer of <strong>SIGA UNIA</strong>, improving academic processes and data management.</li>
							<li>Optimized database queries by <strong>60%</strong> for improved performance.</li>
							<li>Utilized <strong>Agile methodologies</strong> (Jira, Scrum) to deliver projects <strong>35% faster</strong>.</li>
						</ul>
					</div>

					<div class="relative pb-10">
						<img src="/images/logo_freelance.png" alt="Freelance" class="w-16 h-16 rounded-full mb-4" />
						<h2 class="text-2xl font-semibold text-gray-100">Senior Fullstack Developer (2016 - Present)</h2>
						<h3 class="text-xl text-gray-400">Freelance</h3>
						<ul class="list-disc list-inside mt-4 space-y-2">
							<li>Developed an <strong>attendance management system</strong> for the Regional Directory of Health.</li>
							<li>Created an <strong>optimized multicriteria evaluation system</strong> with advanced statistical models.</li>
							<li>Built a <strong>Flutter-based product catalog application</strong>.</li>
						</ul>
					</div>
				</div>

				<hr class="my-12 border-gray-700" />

				<div>
					<h2 class="text-3xl font-semibold text-gray-100 mb-6">Skills & Expertise</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<ul class="list-disc list-inside space-y-2">
							<li><strong>Backend:</strong> Laravel, Symfony, Django, Spring Boot</li>
							<li><strong>Frontend:</strong> VueJS, React, Svelte</li>
							<li><strong>Mobile:</strong> Flutter</li>
						</ul>
						<ul class="list-disc list-inside space-y-2">
							<li><strong>Databases:</strong> MySQL, SQL Server</li>
							<li><strong>System Optimization & Scalability</strong></li>
							<li><strong>API Development & Integrations</strong></li>
						</ul>
					</div>
				</div>
				<div class="mt-8">
					<div class="flex space-x-4 overflow-x-auto scrollbar-custom p-2">
						<Techs></Techs>
					</div>
				</div>

				<hr class="my-12 border-gray-700" />

				<div>
					<h2 class="text-3xl font-semibold text-gray-100 mb-6">Professional Approach</h2>
					<p>
						I focus on <strong>scalability, efficiency, and user-centric design</strong>. My expertise in <strong>academic and administrative systems</strong> allows
						me to <strong>solve real-world challenges</strong>. I value <strong>clean code, maintainability, and seamless UX</strong> in every project.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
