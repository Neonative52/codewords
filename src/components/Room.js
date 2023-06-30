import React, { useState} from 'react';
//import io from 'socket.io-client';

//const socket = io.connect("http://localhost:3001");

const Room = ({revealWords}) => {
    const nickname="mushy";
    const [operativeRed,setOperativeRed] = useState([]);
    const [spymasterRed,setSpymasterRed] = useState([]);
    const [operativeBlue,setOperativeBlue] = useState([]);
    const [spymasterBlue,setSpymasterBlue] = useState([]);
    const [role,setRole] = useState('none');
    const [team,setTeam] = useState('none');
    const [turn,setTurn] = useState('red');
    const [clue,setClue] = useState('');
    const [turnRole,setTurnRole] = useState('spy');
  
    const handleClue = (e) => {
        e.preventDefault();
        //socket.emit('set-clue',{clue,turnRole:"op"})
        setClue(clue);
        setTurnRole('op');
    }

    /*useEffect(()=> {
        socket.on("received-clue",(data)=>{
          setClue(data.clue);
          setTurnRole(data.turnRole);
        })
      },[socket])*/
   
    const handleClick = (e) => {
        const t = e.target.id;
        const r = e.target.value;
        setTeam(t);
        setRole(r);
        if(t==='red') {
            if(r==='op') 
            {
                setOperativeRed([...operativeRed,nickname]);
                const spyRed = spymasterRed.filter((item)=>item!==nickname)
                setSpymasterRed(spyRed);
            } else if(r==='spy') {
                setSpymasterRed([...spymasterRed,nickname]);
                const opRed = operativeRed.filter((item)=>item!==nickname);
                setOperativeRed(opRed);
            }
            const spyBlue = spymasterBlue.filter((item)=>item!==nickname)
            setSpymasterBlue(spyBlue);
            const opBlue = operativeBlue.filter((item)=>item!==nickname);
            setOperativeBlue(opBlue);
        }
        else if(t==='blue'){
            if(r==='op') 
            {
                setOperativeBlue([...operativeBlue,nickname]);
                const spyBlue = spymasterBlue.filter((item)=>item!==nickname)
                setSpymasterBlue(spyBlue);
            } else if(r==='spy') {
                setSpymasterBlue([...spymasterBlue,nickname]);
                const opBlue = operativeBlue.filter((item)=>item!==nickname);
                setOperativeBlue(opBlue);
            }
            const spyRed = spymasterRed.filter((item)=>item!==nickname)
            setSpymasterRed(spyRed);
            const opRed = operativeRed.filter((item)=>item!==nickname);
            setOperativeRed(opRed);
        }
    }

    const handleTurn = () => {
        setClue('');
        setTurn(turn==='red'?'blue':'red');
        setTurnRole('spy');
    }

    const handleReset = () => {
        setRole('none');
        setTeam('none');
        setOperativeRed([]);
        setOperativeBlue([]);
        setSpymasterRed([]);
        setSpymasterBlue([]);
    }

  return (
    <div>
      <header className='Header'>
        <button type='button' className='Button' onClick={handleReset}>Reset Game</button>
        <div className='Notice'>
            {role==='none' && <div>{turn.toUpperCase()} Team's Turn</div>}
            {(team===turn && turnRole==='spy' && role===turnRole) && <div>Give your operatives a clue.</div>}
            {(team!==turn && turnRole==='spy' && role!=='none') && <div>The opponent spymaster is playing, wait for your turn...</div>}
            {(team===turn && turnRole==='spy' && role==='op') && <div>Wait for your spymaster to give you a clue...</div>}
            {(team===turn && turnRole==='op'&& role===turnRole) && <div>Try to guess a word.</div>}
            {(team===turn && turnRole==='op'&& role==='spy') &&<div>Your operatives are guessing now</div>}
            {(team!==turn && turnRole==='op' && role!=='none') &&<div>The opponent operatives are playing, wait for your turn...</div>}
        </div>
        
        <button type='button' className='Button'>Rules</button>
      </header>
      <main className='Body'>
        <section className='Side'>
            <div className='TeamCard' style={{backgroundColor:'red'}}>
                <div className='Icon'></div>
                <p className='RoleLabel'>Operative(s)</p>
                <p className='players'>{operativeRed.map((item)=>(item))}</p>
                {role==='none' && <button type='button' className='Button' id='red' value='op' onClick={(e)=>handleClick(e)}>Join as Operative</button>}
                <p className='RoleLabel'>Spymaster(s)</p>
                <p className='players'>{spymasterRed.map((item)=>(item))}</p>
                {(role==='none' || (role==='op' && team==='red')) && <button type='button' className='Button' id='red' value='spy' onClick={(e)=>handleClick(e)}>Join as Spymaster</button>}
            </div>
        </section>
        <section className='Center'>
            <div className='Board'>
                {role!=='spy' && revealWords.map((item)=>(<div className='Tile'>{item[0].toUpperCase()}</div>))}
                {role==='spy' && revealWords.map((item)=>(<div className='Tile' style={{backgroundColor:item[1]}}>{item[0].toUpperCase()}</div>))}
            </div>
            {role==='spy' && turn===team && turnRole==='spy' && <form className='clueForm'>
                <input type='text' placeholder='Type your clue here' className='clueInput' value={clue} onChange={(e)=>setClue(e.target.value)}/>
                <button type='submit' className='Button' onClick={handleClue}>Give Clue</button>
            </form>}
            {turnRole==='op' && clue.length>0&&
                <div className='clue'>
                    <p className='clueText'>{clue}</p>
                    {turn===team && role==='op' && <button type='button' className='Button' onClick={handleTurn}>End Turn</button>}
                </div>}
        </section>
        <section className='Side'>
            <div className='TeamCard' style={{backgroundColor:'blue'}}>
                <div className='Icon'></div>
                <p className='RoleLabel'>Operative(s)</p>
                <p className='players'>{operativeBlue.map((item)=>(item))}</p>
                {role==='none' && <button type='button' className='Button' id='blue' value='op' onClick={(e)=>handleClick(e)}>Join as Operative</button>}
                <p className='RoleLabel'>Spymaster(s)</p>
                <p className='players'>{spymasterBlue.map((item)=>(item))}</p>
                {(role==='none' ||(role==='op'&& team==='blue')) && <button type='button' className='Button' id='blue' value='spy' onClick={(e)=>handleClick(e)}>Join as Spymaster</button>}
            </div>
        </section>
      </main>
      <footer className='Footer'>Copyright &copy; {Date()}</footer>
    </div>
  )
}

export default Room
