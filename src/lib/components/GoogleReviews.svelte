<!-- <script>
	const mockReviews = [
		{
			author_name: 'BAZIS BOOKING',
			rating: 5,
			text: 'Thank you for your prompt work and high-quality stylish gas fireplace! Now my evenings with friends will be cozy and unforgettable! I was very pleased!',
			time: 1695219200,
			profile_photo_url: 'https://via.placeholder.com/150', // Замените на реальный URL изображения
			location: 'Koh Samui',
			date: '19 sep, 23'
		},
		{
			author_name: 'Jane Smith',
			rating: 4,
			text: 'Good experience overall, but the waiting time was a bit long.',
			time: 1625151200,
			profile_photo_url: 'https://via.placeholder.com/150', // Замените на реальный URL изображения
			location: 'Bangkok',
			date: '18 sep, 23'
		},
		{
			author_name: 'Bob Johnson',
			rating: 3,
			text: 'Average experience, nothing special.',
			time: 1625054800,
			profile_photo_url: 'https://via.placeholder.com/150', // Замените на реальный URL изображения
			location: 'Phuket',
			date: '17 sep, 23'
		}
	];
</script>

<div class="">
	<h1 class="font-bold uppercase text-5xl text-black mb-2">Review</h1>
	<p class="text-zinc-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
		{#each mockReviews as review}
			<div class="review-card shadow-lg">
				<img
					src={review.profile_photo_url}
					alt="Profile photo"
					class="w-full h-48 object-cover rounded-t-lg"
				/>
				<div class="p-4">
					<div class="flex items-center gap-3 mb-2">
						<div>
							<p class="review-author">{review.author_name}, {review.location}</p>
							<p class="review-date">{review.date}</p>
						</div>
					</div>
					<p class="review-rating">{'⭐'.repeat(review.rating)}</p>
					<p class="review-text">{review.text}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.review-card {
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: white;
	}
	.review-author {
		font-weight: bold;
	}
	.review-rating {
		color: #fbbf24;
	}
	.review-text {
		margin-top: 0.5rem;
	}
	.review-date {
		color: #6b7280;
		font-size: 0.875rem;
		margin-top: 0.5rem;
	}
	.profile-photo {
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
</style> -->
