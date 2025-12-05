export async function getStudents() {
  try {
    const response = await fetch('http://localhost:8010/api/students', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    
    const students = (data.value || data || []).map((student, index) => ({
      unique_id: index + 1,
      course: 'N/A', 
      student: {
        id: student._id,
        firstname: student.firstName || student.firstname || 'N/A',
        lastname: student.lastName || student.lastname || 'N/A'
      },
      grade: student.grade || 0,
      date: student.date || new Date().toISOString().split('T')[0]
    }));

    return students;
  } catch (error) {
    console.error('Failed to fetch students from MongoDB:', error);
    throw error;
  }
}

