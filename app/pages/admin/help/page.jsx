'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '@/app/config/api';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Custom_page_title from '@/app/custom/Custom_page_title';

function HelpPage() {
  const [helps, setHelps] = useState([]);
  const { t } = useTranslation()
  const [reply, setReply] = useState('');



  const fetchHelps = async () => {
    try {
      const res = await axios.get(`${api.baseUrl}api/v1/show/all/helps`);
      setHelps(res.data.data || []);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    fetchHelps();
  }, []);






  const handleReply = async (helpId) => {
    try {
      const res = await axios.post(`${api.baseUrl}api/v1/edit/help/${helpId}`, { reply });
      fetchHelps();
      toast.success(t('reply-success'));

    } catch (error) {
      console.log(error);
      toast.error(t('reply-failed'));
    }
  };





  return (
    <div>
      <Custom_page_title title={t('help')} />
      {helps.length === 0 ? (
        <div>No help found.</div>
      ) : (
        helps.map((help) => (
          <div key={help._id} className={`p-4 rounded-2xl shadow my-3 ${help.reply ? 'bg-green-100' : 'bg-red-100'}`}>
            <div><strong>{t('topic')}</strong> {help.topic}</div>
            <div><strong>{t('message')}:</strong> {help.message}</div>
            <div><strong>{t('reply')}:</strong> {help.reply}</div>







            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById(`modal_${help._id}`).showModal()}>{t('reply')}</button>
            <dialog id={`modal_${help._id}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>


                <div className='flex flex-col'>
                  <label className="label">
                    <span className="label-text">{t('reply')}</span>
                  </label>
                  <textarea className="textarea textarea-bordered w-full h-24"  onChange={(e) => setReply(e.target.value)} placeholder="Reply"></textarea>
                  <button className='btn btn-primary my-3' onClick={() => handleReply(help._id)}>{t('send')}</button>
                </div>


              </div>
            </dialog>
          </div>
        ))
      )}
    </div>
  )
}


///show/all/helps

export default HelpPage