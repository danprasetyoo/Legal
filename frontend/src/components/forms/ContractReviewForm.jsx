import React, { useState } from 'react';
import axios from 'axios';
import SuccessModal from '../common/SucessModal';
import FailureModal from '../common/FailureModal';

export default function ContractReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    division: '',
    officeEmail: '',
    legalReviewType: '',
    legalIssueTitle: '',
    documentName: '',
    secondParty: '',
    thirdParty: '',
    chronology: '',
    legalQuestions: '',
    documentType: '',
    additionalInfo: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contract-reviews', formData);
      setMessage('Contract review submitted successfully!');
      setError('');
      setIsSuccessModalOpen(true); // Open SuccessModal
    } catch (err) {
      setError('Failed to submit contract review. Please try again.');
      setMessage('');
      setIsFailureModalOpen(true); // Open FailureModal
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">
            Legal Opinion Form
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Submit Your Legal Queries
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Please provide the required information below to help us assist you
            better.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8 justify-center">
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Please fill out the form below with accurate information.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="position"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Position Title
                    </label>
                    <div className="mt-2">
                      <input
                        id="position"
                        name="position"
                        type="text"
                        placeholder="Manager"
                        value={formData.position}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="division"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Division in RIU
                    </label>
                    <div className="mt-2">
                      <select
                        id="division"
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Human Capital and General Affair">
                          Human Capital and General Affair
                        </option>
                        <option value="Corporate Secretary">
                          Corporate Secretary
                        </option>
                        <option value="Life Underwriting">
                          Life Underwriting
                        </option>
                        <option value="General Reinsurance Underwriting">
                          General Reinsurance Underwriting
                        </option>
                        <option value="Business Management">
                          Business Management
                        </option>
                        <option value="Legal Compliance and Risk Management">
                          Legal Compliance and Risk Management
                        </option>
                        <option value="Information Technology">
                          Information Technology
                        </option>
                        <option value="Strategic Development">
                          Strategic Development
                        </option>
                        <option value="SIMO">SIMO</option>
                        <option value="Actuarial">Actuarial</option>
                        <option value="Finance">Finance</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Satuan Pengawas Internal">
                          Satuan Pengawas Internal
                        </option>
                        <option value="BPPDAN">BPPDAN</option>
                        <option value="IndonesiaRe Institute">
                          IndonesiaRe Institute
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="officeEmail"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Office Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="officeEmail"
                        name="officeEmail"
                        type="email"
                        placeholder="office@example.com"
                        value={formData.officeEmail}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="legalReviewType"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Type of Legal Review
                    </label>
                    <div className="mt-2">
                      <select
                        id="legalReviewType"
                        name="legalReviewType"
                        value={formData.legalReviewType}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Business Technical">
                          Business Technical
                        </option>
                        <option value="Business Support">
                          Business Support
                        </option>
                        <option value="Reinsurance Agreement">
                          Reinsurance Agreement (Treaty / Facultative)
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="legalIssueTitle"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Legal Issue Title
                    </label>
                    <div className="mt-2">
                      <input
                        id="legalIssueTitle"
                        name="legalIssueTitle"
                        type="text"
                        placeholder="Title of the legal issue"
                        value={formData.legalIssueTitle}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="documentName"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Nama Dokumen
                    </label>
                    <div className="mt-2">
                      <input
                        id="documentName"
                        name="documentName"
                        type="text"
                        placeholder="Nama dokumen"
                        value={formData.documentName}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="secondParty"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Pihak Kedua / Vendor / Ceding / Broker
                    </label>
                    <div className="mt-2">
                      <input
                        id="secondParty"
                        name="secondParty"
                        type="text"
                        placeholder="Nama pihak kedua"
                        value={formData.secondParty}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="thirdParty"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Pihak Ketiga / Vendor / Ceding / Broker
                    </label>
                    <div className="mt-2">
                      <input
                        id="thirdParty"
                        name="thirdParty"
                        type="text"
                        placeholder="Nama pihak ketiga"
                        value={formData.thirdParty}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="chronology"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Chronology of Legal Issues
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="chronology"
                        name="chronology"
                        rows={4}
                        placeholder="Provide a detailed chronology of the legal issue"
                        value={formData.chronology}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="legalQuestions"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Legal Issue Questions
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="legalQuestions"
                        name="legalQuestions"
                        rows={3}
                        placeholder="List the questions related to the legal issue"
                        value={formData.legalQuestions}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="documentType"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Jenis Dokumen yang akan direview
                    </label>
                    <div className="mt-2">
                      <select
                        id="documentType"
                        name="documentType"
                        value={formData.documentType}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Surat Perintah Kerja">
                          Surat Perintah Kerja
                        </option>
                        <option value="Perjanjian Kerjasama Non Teknik">
                          Perjanjian Kerjasama Non Teknik
                        </option>
                        <option value="Kontrak Treaty">Kontrak Treaty</option>
                        <option value="Kontrak Retro">Kontrak Retro</option>
                        <option value="Pembatalan Perjanjian">
                          Pembatalan Perjanjian
                        </option>
                        <option value="Nota Kesepahaman">
                          Nota Kesepahaman
                        </option>
                        <option value="Surat">Surat</option>
                        <option value="Lain-Lain">Lain-Lain</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="additionalInfo"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Keterangan Tambahan
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={3}
                        placeholder="Tambahkan keterangan tambahan jika diperlukan"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="evidenceDocuments"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Upload Evidence Documents
                    </label>
                    <div className="mt-2">
                      <input
                        id="evidenceDocuments"
                        name="evidenceDocuments"
                        type="file"
                        multiple
                        className="block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-500"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        required
                      />
                      <p className="mt-1 text-sm text-gray-600">
                        Upload up to 10 files, max 100 MB per file.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Success"
        message="Your contract review has been submitted successfully!"
      />
      <FailureModal
        isOpen={isFailureModalOpen}
        onClose={() => setIsFailureModalOpen(false)}
        title="Submission Failed"
        message="There was an error submitting your contract review. Please try again."
      />
    </div>
  );
}
