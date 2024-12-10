import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Texas Tech University</h3>
                <p className="text-gray-600">Master's Degree in Computer Science</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span>Expected Graduation: December 2024</span>
              <span className="font-semibold">GPA: 3.81</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;