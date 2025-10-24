import DestinationCard from '../DestinationCard';
import viennaImg from '@assets/generated_images/Vienna_destination_blog_795b6e7a.png';

export default function DestinationCardExample() {
  return (
    <div className="p-8">
      <DestinationCard
        id="vienna"
        name="Vienna"
        country="Austria"
        image={viennaImg}
        excerpt="Where imperial elegance meets the world's finest coffee culture in historic coffeehouses."
      />
    </div>
  );
}
