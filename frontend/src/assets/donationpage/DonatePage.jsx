import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setAmount('');
      } else {
        setError(data.message || 'Donation failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Donate to This Campaign</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="donationAmount">
          <Form.Label>Amount (₹)</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Donate</Button>
      </Form>
    </Container>
  );
};

export default DonatePage;
